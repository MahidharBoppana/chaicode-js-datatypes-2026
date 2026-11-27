/**
 * 🪪 Aadhaar Number Masker
 *
 * Sharma uncle's son is building a new app that needs to display Aadhaar numbers
 * while maintaining privacy. So, show only the last 4 digits and mask all the
 * remaining digits with "X". The format should also include dashes: XXXX-XXXX-1234
 *
 * Rules:
 *   - The input must be a string containing exactly 12 digits (no spaces or dashes)
 *   - Replace the first 8 digits with "X"
 *   - Keep the last 4 digits unchanged
 *   - Output format: "XXXX-XXXX-1234" (dashes after every 4 characters)
 *   - Hint: Use string methods like slice(), repeat(), and length
 *
 * Validation:
 *   - If the input is not a string, return "INVALID"
 *   - If the string length is not exactly 12, return "INVALID"
 *   - If the string contains any non-digit character, return "INVALID"
 *
 * @param {string} aadhaarNumber - 12-digit Aadhaar number as a string
 * @returns {string} Masked Aadhaar in the format "XXXX-XXXX-1234" or "INVALID"
 *
 * @example
 *   maskAadhaar("123456781234")
 *   // => "XXXX-XXXX-1234"
 *
 *   maskAadhaar("9876")
 *   // => "INVALID"
 */
export function maskAadhaar(aadhaarNumber) {
  if (
    typeof aadhaarNumber !== "string" ||
    aadhaarNumber.length !== 12 ||
    !/^\d+$/.test(aadhaarNumber)
  )
    return "INVALID";

  return `${"X".repeat(4)}-${"X".repeat(4)}-${aadhaarNumber.slice(-4)}`;
}
