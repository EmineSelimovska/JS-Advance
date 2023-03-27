function printDeckOfCards(cards) {
    const deck = [];
    for (const el of cards) {
        const face = el.slice(0, -1);
        const suit = el.slice(-1);
        try {
            const cardObj = createCard(face,suit);
            deck.push(cardObj);
        }catch (ex){
            console.log(`Invalid card: ${el}`);
        }
        
    }
    console.log(deck.join(' '));
    
    function createCard (face,suit){
        const faces = ['2', '3','4', '5','6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
         };
         if(faces.indexOf(face) == -1){
            throw new TypeError(`Indalid face ${face}`);
         }else if(!suits.hasOwnProperty(suit)){
             throw new TypeError(`Indalid suit ${suit}`);
         }
          const result = {
             face,
             suit,
             toString() {
                 return this.face + suits[this.suit];
             }
          }
          return result;
     }
   
    
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);