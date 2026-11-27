/**
 * 💬 WhatsApp Message Parser
 *
 * Chintu is building a WhatsApp chat analyzer. He needs to parse a raw
 * WhatsApp exported message line and extract the date, time, sender,
 * and message separately.
 *
 * WhatsApp export format:
 *   "DD/MM/YYYY, HH:MM - Sender Name: Message text here"
 *
 * Rules:
 *   - Extract the date: from the beginning of the string up to the first ", " (comma-space)
 *   - Extract the time: from after ", " up to " - " (space-dash-space)
 *   - Extract the sender: from after " - " up to the first ": " (colon-space)
 *   - Extract the message text: everything after the first ": " (after the sender), trimmed
 *   - wordCount: Count the words in the message (split by spaces and filter out empty strings)
 *   - Sentiment detection (case-insensitive check on the message text):
 *     - If the message contains "😂", ":)", or "haha" => sentiment = "funny"
 *     - If the message contains "❤", "love", or "pyaar" => sentiment = "love"
 *     - Otherwise => sentiment = "neutral"
 *     - If both conditions match, "funny" gets priority
 *   - Hint: Use indexOf(), substring()/slice(), includes(), split(),
 *     trim(), and toLowerCase()
 *
 * Validation:
 *   - If the input is not a string, return null
 *   - If the string does not contain " - " or does not contain ": " (after the sender), return null
 *
 * @param {string} message - Raw WhatsApp exported message line
 * @returns {{ date: string, time: string, sender: string, text: string, wordCount: number, sentiment: string } | null}
 *
 * @example
 *   parseWhatsAppMessage("25/01/2025, 14:30 - Rahul: Bhai party kab hai? 😂")
 *   // => { date: "25/01/2025", time: "14:30", sender: "Rahul",
 *   //      text: "Bhai party kab hai? 😂", wordCount: 5, sentiment: "funny" }
 *
 *   parseWhatsAppMessage("01/12/2024, 09:15 - Priya: I love this song")
 *   // => { date: "01/12/2024", time: "09:15", sender: "Priya",
 *   //      text: "I love this song", wordCount: 4, sentiment: "love" }
 */

export function parseWhatsAppMessage(message) {
  if (typeof message !== "string") return null;

  const commaIndex = message.indexOf(", ");
  const dashIndex = message.indexOf(" - ");
  const colonIndex = message.indexOf(": ", dashIndex + 3);

  if (commaIndex === -1 || dashIndex === -1 || colonIndex === -1) return null;

  const date = message.substring(0, commaIndex);
  const time = message.substring(commaIndex + 2, dashIndex);
  const sender = message.substring(dashIndex + 3, colonIndex);

  const text = message.substring(colonIndex + 2).trim();

  const lowerText = text.toLowerCase();

  const sentiment = {
    funny: ["😂", ":)", "haha"],
    love: ["❤", "love", "pyaar"],
  };

  let detectedSentiment = "neutral";

  if (sentiment.funny.some((word) => lowerText.includes(word))) {
    detectedSentiment = "funny";
  } else if (sentiment.love.some((word) => lowerText.includes(word))) {
    detectedSentiment = "love";
  }

  const wordCount = text.split(" ").filter((word) => word !== "").length;

  return {
    date,
    time,
    sender,
    text,
    wordCount,
    sentiment: detectedSentiment,
  };
}
