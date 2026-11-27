/**
 * ☕ Raju's Tea Shop - Menu Formatter
 *
 * Raju bhai has decided to digitize his tea shop's menu.
 * You will receive an array of items, and you need to create a formatted
 * menu string in which each item's name is written in UPPERCASE along with its price.
 *
 * Rules:
 *   - items is an array of objects: [{ name: "masala chai", price: 15 }, ...]
 *   - Convert each item's name to uppercase using toUpperCase()
 *   - Format: "NAME - Rs.PRICE" (e.g., "MASALA CHAI - Rs.15")
 *   - Join all formatted items using " | "
 *   - Skip items whose price is 0 or negative (filter them out)
 *   - Also skip items whose name is an empty string or is not a string
 *   - Hint: Use Array.isArray(), filter(), map(), join(), and toUpperCase()
 *
 * Validation:
 *   - If items is not an array or is empty, return ""
 *
 * @param {Array<{name: string, price: number}>} items - Menu items
 * @returns {string} Formatted menu string
 *
 * @example
 *   formatChaiMenu([{ name: "masala chai", price: 15 }, { name: "samosa", price: 12 }])
 *   // => "MASALA CHAI - Rs.15 | SAMOSA - Rs.12"
 *
 *   formatChaiMenu([])
 *   // => ""
 */

// Rules:
//  *   - items is an array of objects: [{ name: "masala chai", price: 15 }, ...]
//  *   - Convert each item's name to uppercase using toUpperCase()
//  *   - Format: "NAME - Rs.PRICE" (e.g., "MASALA CHAI - Rs.15")
//  *   - Join all formatted items using " | "
//  *   - Skip items whose price is 0 or negative (filter them out)
//  *   - Also skip items whose name is an empty string or is not a string
//  *   - Hint: Use Array.isArray(), filter(), map(), join(), and toUpperCase()
export function formatChaiMenu(items) {
  if (!Array.isArray(items) || items.length === 0) return "";

  const filteredItems = items.filter(
    (item) =>
      typeof item.name === "string" &&
      item.name.trim() !== "" &&
      item.price > 0,
  );

  const formattedItems = filteredItems.map((item) => {
    return `${item.name.toUpperCase()} - Rs.${item.price}`;
  });

  return formattedItems.join(" | ");
}
