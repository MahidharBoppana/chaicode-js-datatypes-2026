/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu has created a movie database, but he has entered all the titles incorrectly.
 * Some are in ALL CAPS, some are all lowercase, and some contain extra
 * spaces. Your task is to fix these titles and convert them into proper Title Case!
 *
 * Rules:
 *   - Remove extra spaces: remove leading and trailing spaces, and replace
 *     multiple spaces between words with a single space
 *   - Capitalize the first letter of each word and convert the remaining
 *     letters to lowercase (Title Case)
 *   - EXCEPTION: Short words that should remain lowercase in Title Case:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     HOWEVER, if the word is the FIRST word of the title, capitalize it
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), and slice()
 *
 * Validation:
 *   - If the input is not a string, return ""
 *   - If the string is empty after trimming, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned-up Title Case movie title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  if (typeof title !== "string" || title.trim() === "") return "";

  const smallWords = [
    "ka",
    "ki",
    "ke",
    "se",
    "aur",
    "ya",
    "the",
    "of",
    "in",
    "a",
    "an",
  ];

  const trimmedTitle = title.trim();
  const splittedTitles = trimmedTitle.split(/\s+/);
  const formattedTitles = splittedTitles.map((splittedTitle, index) => {
    const lowerWord = splittedTitle.toLowerCase();

    if (index != 0 && smallWords.includes(lowerWord)) return lowerWord;

    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  });

  return formattedTitles.join(" ");
}
