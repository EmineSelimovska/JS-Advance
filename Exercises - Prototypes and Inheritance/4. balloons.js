function solution() {
    class Balloon {
        constructor(color,gasWeigth){
            this.color = color,
            this.gasWeigth = gasWeigth
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color,gasWeigth,ribbonColor,ribbonLength){
            super(color,gasWeigth);
            this._ribbon = {
                color : ribbonColor,
                length : ribbonLength
            }
           
        }
       get ribbon(){
        return this._ribbon;
       }

    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,gasWeigth,ribbonColor,ribbonLength,text){
            super(color,gasWeigth,ribbonColor,ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}




let classes = solution();
let testBalloon = new classes.Balloon(
"yellow", 20.5);
let testPartyBalloon = new
classes.PartyBalloon("yellow", 20.5,
"red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);