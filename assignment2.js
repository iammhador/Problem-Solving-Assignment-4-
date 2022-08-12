// Assignment 2 Solution:
function isJavaScriptFile(string) {
  if (
    typeof string === "string" &&
    (typeof string !== "boolean") & (typeof string !== "number") &&
    string.includes(".js")
  ) {
    return true;
  } else {
    return false;
  }
}
const result = isJavaScriptFile(true);
