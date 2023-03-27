function ticket(arr, sortCritetion) {
  const tickets = [];
  class Ticket {
    constructor(destination, price, status) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status);
    }
  }
  for (const line of arr) {
    let [destination, price, status] = line.split("|");
    price = Number(price);
    const currentTicket = new Ticket(destination, price, status);
    tickets.push(currentTicket);
  }
  const sorted = tickets.sort((a,b) => {
      if(sortCritetion === 'destination'){
        return a.destination.localeCompare(b.destination);
      }else if(sortCritetion === 'price'){
        return a.price - b.price;
      }else if(sortCritetion === 'status'){
        return a.status.localeCompare(b.status);
      }
  })
  return sorted
}
const log = ticket(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
console.log(log);
