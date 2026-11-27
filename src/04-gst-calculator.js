/**
 * 🧾 GST Calculator - Let's Apply Tax!
 *
 * Bunty is building a GST calculator for his shop. He needs to provide
 * customers with a bill that clearly displays the base price, GST amount,
 * and total amount. The GST rate changes depending on the product category.
 *
 * GST Rates (based on category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, rice, flour, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurants below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount and totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return an object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - Compare category names in lowercase (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), and toLowerCase()
 *
 * Validation:
 *   - If amount is not a positive finite number, return null
 *   - If category is not a string, return null
 *   - If the category is unknown, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  if (!Number.isFinite(amount) || amount <= 0 || typeof category !== "string")
    return null;
  const gstRates = {
    essential: 0,
    food: 5,
    standard: 12,
    electronics: 18,
    luxury: 28,
  };

  category = category.toLowerCase();

  if (!Object.keys(gstRates).includes(category)) return null;

  let gstAmount = (amount * gstRates[category]) / 100;
  let totalAmount = amount + gstAmount;
  return {
    baseAmount: amount,
    gstRate: gstRates[category],
    gstAmount: parseFloat(gstAmount.toFixed(2)),
    totalAmount: parseFloat(totalAmount.toFixed(2)),
  };
}
