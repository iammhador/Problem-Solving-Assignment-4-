//Problem 4 Solution:
function publicBusFare(passengers) {
  const bus = 50;
  const microbus = 11;
  if (typeof passengers === "number") {
    let one = passengers % bus;
    let two = one % microbus;
    let left = two * 250;
    return left;
  } else if (
    typeof passengers === "string" ||
    typeof passengers === "boolean"
  ) {
    return "Sorry, Your value is not appropriate. Please, recheck and input your proper value.";
  }
}
const result = publicBusFare(8);
