/**
 * 🚂 Mumbai Local Train Pass Generator
 *
 * Starting today, you are building a digital pass system for Mumbai Local trains!
 * You will receive passenger details and need to generate a formatted pass string.
 * The pass must contain all the details in a specific format.
 *
 * Rules:
 *   - The passenger object must contain these required fields: name, from, to, classType
 *   - classType must be either "first" or "second" (case-insensitive check)
 *   - Generate the Pass ID:
 *     First character of classType in uppercase + first 3 letters of from in uppercase
 *     + first 3 letters of to in uppercase
 *     Example: "first", "dadar", "andheri" => "F" + "DAD" + "AND" = "FDADAND"
 *   - Output format using a template literal:
 *     Line 1: "MUMBAI LOCAL PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Title Case = first letter uppercase, remaining letters lowercase
 *   - Separate lines using \n (newline)
 *   - Hint: Use template literals, slice(), toUpperCase(), toLowerCase(),
 *     charAt(), and typeof
 *
 * Validation:
 *   - If passenger is not an object or is null, return "INVALID PASS"
 *   - If any required field (name, from, to, classType) is missing
 *     or is an empty string, return "INVALID PASS"
 *   - If classType is neither "first" nor "second", return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string} Formatted pass or "INVALID PASS"
 *
 * @example
 *   generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
 *   // => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
 *
 *   generateLocalPass(null)
 *   // => "INVALID PASS"
 */

//  - Output format using a template literal:
//  *     Line 1: "MUMBAI LOCAL PASS"
//  *     Line 2: "---"
//  *     Line 3: "Name: <NAME IN UPPERCASE>"
//  *     Line 4: "From: <From in Title Case>"
//  *     Line 5: "To: <To in Title Case>"
//  *     Line 6: "Class: <FIRST or SECOND>"
//  *     Line 7: "Pass ID: <PASSID>"
//  *   - Title Case = first letter uppercase, remaining letters lowercase

export function generateLocalPass(passenger) {
  if (
    typeof passenger !== "object" ||
    passenger === null ||
    [passenger.name, passenger.from, passenger.to, passenger.classType].some(
      (field) => field === "" || typeof field !== "string",
    ) ||
    !["FIRST", "SECOND"].includes(passenger.classType.toUpperCase())
  )
    return "INVALID PASS";

  const loweredFrom = passenger.from.toLowerCase();
  const loweredTo = passenger.to.toLowerCase();
  const passId =
    passenger.classType.charAt(0) +
    loweredFrom.slice(0, 3) +
    loweredTo.slice(0, 3);

  return `MUMBAI LOCAL PASS\n---\nName: ${passenger.name.toUpperCase()}\nFrom: ${loweredFrom.charAt(0).toUpperCase() + loweredFrom.slice(1)}\nTo: ${loweredTo.charAt(0).toUpperCase() + loweredTo.slice(1)}\nClass: ${passenger.classType.toUpperCase()}\nPass ID: ${passId.toUpperCase()}`;
}
