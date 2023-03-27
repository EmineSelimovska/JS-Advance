function card(face,suit) {
    const faces = ['2', '3','4', '5','6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
    'S': '\u2660',
    'H': '\u2665',
    'D': '\u2666',
    'C': '\u2663',
     };

    if(faces.includes(face) == false){
       throw new TypeError('Indalid face');
    }else if(suits.hasOwnProperty(suit) == false){
        throw new TypeError('Indalid suit');
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
const cards = [
    card('A', 'S'),
    card('10', 'H')]
   // card('1', 'C')];
console.log(cards.join('\n'));
