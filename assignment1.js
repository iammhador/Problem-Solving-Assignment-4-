// Problem 1 Solution:
function radianToDegree(radian) {
  const degree = (radian * 180) / 3.1416;
  if (
    typeof radian === "number" &&
    typeof radian !== "boolean" &&
    typeof radian === "string"
  ) {
    return degree;
  } else {
    return "Sorry, Your value is not appropriate. Please, recheck and input your proper value.";
  }
}
const result = radianToDegree("5");
