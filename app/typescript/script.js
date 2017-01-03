// we are learning typescript
var flag;
var colorCode = 0xf00d;
var binay = 10;
var octal = 484;
flag = true;
var color = "blue\nwhy should not\nwe use template \nstring whe\nthere is " + colorCode + " to\nlearn\n";
var list = [1, 2, 3];
var gList = [1, 2, 3];
var mix;
mix = ["hello", 12];
mix[2] = 'sid';
// console.log(mix[0].substr(1));
// console.log(color);
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
;
var c = Colour.Blue;
var dontKnow = 4;
console.log(typeof dontKnow);
var liste = [1, 2, true, 'wowbehdni'];
console.info(liste[3]);
var someValue = 'this is a string';
console.log(someValue.length, typeof someValue);
