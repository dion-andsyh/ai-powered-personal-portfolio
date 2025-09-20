import { GoogleGenAI, Chat } from "@google/genai";
import type { Content } from "@google/genai";

// Initialize AI with API key from environment variables
const getAI = () => {
  const apiKey = import.meta.env.VITE_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
  }
  return new GoogleGenAI({ apiKey });
};

let chatInstance: Chat | null = null;

const initializeChat = (systemInstruction: string, history: Content[]) => {
    const ai = getAI();
    chatInstance = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
        },
        history: history,
    });
};

/**
 * Formats AI response text for better readability while preserving structure.
 * @param text The input string from AI response.
 * @returns The formatted string with improved structure and readability.
 */
const cleanTextResponse = (text: string): string => {
  return text
    // Preserve bullet points but clean them up
    .replace(/^\s*[-*+•]\s/gm, '• ') // Standardize bullet points
    // Handle numbered lists
    .replace(/^\s*\d+\.\s/gm, (match) => match.trim() + ' ') // Clean numbered lists
    // Clean up headers but preserve them
    .replace(/^#{1,6}\s+/gm, '') // Remove markdown headers but keep the text
    // Handle bold text - convert to uppercase for emphasis in chat
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold markdown
    // Handle italic text
    .replace(/(\*|_)(.*?)\1/g, '$2') // Remove italic markdown
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Replace multiple newlines with double newlines
    .replace(/^\s+|\s+$/gm, '') // Trim whitespace from start/end of lines
    // Ensure proper spacing after bullet points
    .replace(/•([^\s])/g, '• $1') // Ensure space after bullet
    // Clean up any remaining markdown artifacts
    .replace(/`([^`]+)`/g, '$1') // Remove code backticks
    .trim();
};

export const streamChat = async (systemInstruction: string, history: Content[], message: string) => {
    try {
        if (!chatInstance) {
            initializeChat(systemInstruction, history);
        }

        if (!chatInstance) {
            throw new Error("Chat initialization failed.");
        }

        const result = await chatInstance.sendMessageStream({ message: message });
        
        // The result is a stream of GenerateContentResponse chunks
        // We will return the AsyncGenerator directly to the component
        const stream = (async function* () {
            for await (const chunk of result) {
                // Assuming chunk contains a 'text' property
                 if (chunk.text) {
                    yield { text: cleanTextResponse(chunk.text) };
                }
            }
        })();
        
        return stream;

    } catch (error) {
        console.error("Gemini API error:", error);
        // Reset chat instance on error to allow for a fresh start
        chatInstance = null;
        throw new Error("Failed to get response from AI assistant.");
    }
};
