class student{
    fullName:string;
    constructor( firstName:string,  lastName:string){
        this.fullName=firstName+lastName;
    };
    public countArray(arr:Array<number>){
        return arr.length;
    }
}

interface Person{
    firstName:string,
    lastName:string
}

function greeter(person : Person){
    let color:string='blue';
    let count:number=10;
    let a:string=`Hello ${person.firstName+person.lastName}
            and i'm going to be ${count+1} years old tomorrow `;
    let list:number[]=[3,3,3];
    let list1:Array<number>=[2,2,2];
    let list2:[number,string]=[1,'new'];
    // console.log(list2[0]);
    // console.log(a);
    return a;
}

var user=new student('mary','jane');
console.log(user);
console.log(user.countArray([1,2,3,4,5]));

// document.body.innerHTML=greeter(user);