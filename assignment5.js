//Problem 5 Solution:
const friend1 = { name: "abul", friend: "babul" };
const friend2 = { name: "babul", friend: "abul" };
function isBestFriend(friend1, friend2) {
  if (
    friend1.name === friend2.friend &&
    friend2.name === friend1.friend &&
    typeof friend1 !== "boolean" &&
    typeof friend2 !== "boolean" &&
    typeof friend1 !== "number" &&
    typeof friend2 !== "number"
  ) {
    return true;
  } else {
    return false;
  }
}
const result = isBestFriend(friend1, friend2);
