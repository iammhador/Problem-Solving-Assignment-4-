//Problem 3 Solution:
function oilPrice(diesel, petrol, octen) {
  const perLiterDieselPrice = 114;
  const perLiterPetrolPrice = 130;
  const perLiterOctenPrice = 135;
  if (
    diesel < 0 ||
    petrol < 0 ||
    octen < 0 ||
    typeof diesel === "string" ||
    typeof petrol === "string" ||
    typeof octen === "string" ||
    typeof diesel === "boolean" ||
    typeof petrol === "boolean" ||
    typeof octen === "boolean"
  ) {
    return "error";
  } else if (diesel >= 0 || petrol >= 0 || octen >= 0) {
    const dieselBuyingCost = diesel * perLiterDieselPrice;
    const petrolBuyingCost = petrol * perLiterPetrolPrice;
    const octenBuyingCost = octen * perLiterOctenPrice;
    const totalCost = dieselBuyingCost + petrolBuyingCost + octenBuyingCost;
    return totalCost;
  }
}
const result = oilPrice(20, 20, 20);
