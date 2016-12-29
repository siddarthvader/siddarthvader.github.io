var student = (function () {
    function student(firstName, lastName) {
        this.fullName = firstName + lastName;
    }
    ;
    student.prototype.countArray = function (arr) {
        return arr.length;
    };
    return student;
}());
function greeter(person) {
    var color = 'blue';
    var count = 10;
    var a = "Hello " + (person.firstName + person.lastName) + "\n            and i'm going to be " + (count + 1) + " years old tomorrow ";
    var list = [3, 3, 3];
    var list1 = [2, 2, 2];
    var list2 = [1, 'new'];
    // console.log(list2[0]);
    // console.log(a);
    return a;
}
var user = new student('mary', 'jane');
console.log(user);
console.log(user.countArray([1, 2, 3, 4, 5]));
// document.body.innerHTML=greeter(user); 
