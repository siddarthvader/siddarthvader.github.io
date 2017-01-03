// we are learning typescript

let flag:boolean;
let colorCode:number=0xf00d;
let binay:number=0b1010;
let octal: number = 0o744;
flag=true;
let color:string=`blue
why should not
we use template 
string whe
there is ${colorCode} to
learn
`;

let list: number[]=[1,2,3];
let gList:Array<number>=[1,2,3];

let mix:[string,number];
mix=["hello",12];

mix[2]='sid';

// console.log(mix[0].substr(1));
// console.log(color);

enum Colour {Red,Green,Blue=2};
let c:Colour=Colour.Blue;

let dontKnow:any=4;

console.log(typeof dontKnow);

let liste:[any]=[1,2,true,'wowbehdni'];
console.info(liste[3]);


let someValue: any='this is a string';

console.log((someValue as string).length,typeof someValue);
