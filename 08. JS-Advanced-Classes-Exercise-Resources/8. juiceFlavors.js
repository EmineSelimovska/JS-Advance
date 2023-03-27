function juiceFlavors(input) {
  let bottle = {};
  let juices = {};

  for (const line of input) {
    let [juice, quantity] = line.split(" => ");

    let currentJuice = {};
    const currentQuantity = Number(quantity);

    if (
      !Object.values(juices)
        .map((x) => x.juice)
        .includes(juice)
    ) {
      currentJuice = {
        juice,
        quantity: currentQuantity,
      };
      juices[juice] = currentJuice;
    } else {
      currentJuice = juices[juice];
      currentJuice.quantity += currentQuantity;
    }
    let count = 0;
    while (currentJuice.quantity >= 1000) {
      count++;
      currentJuice.quantity -= 1000;
    }
    if (
      !Object.values(bottle)
        .map((x) => x.juice)
        .includes(juice) &&
      count != 0
    ) {
      currentJuice = {
        juice,
        bottle: count,
      };
      bottle[juice] = currentJuice;
    } else if (
      Object.values(bottle)
        .map((x) => x.juice)
        .includes(juice)
    ) {
      currentJuice = bottle[juice];
      currentJuice.bottle += count;
    }
  }

  for (const juice of Object.entries(bottle)) {
    console.log(`${juice[0]} => ${juice[1].bottle}`);
  }
  
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
