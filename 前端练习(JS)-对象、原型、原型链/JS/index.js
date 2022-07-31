//字面量方式创建
// let person={
//     name:'hunger',
//     sayName:function(){
//         console.log(`我的名字是${this.name}`);
//     }
// };
// person.sayName();
// let dog={
//     color:'yellow',
//     saycolor(){
//         console.log(`汪汪${this.color}`);
//     }
// }
// dog.saycolor();
/**结果为我的名字是hunger
汪汪yellow**/

//构造函数方式创建
// function Dog(color){
//     this.color=color;
//     this.sayColor=function(){
//         console.log(`汪汪${this.color}`);
//     }
// }

// let dog1=new Dog('red');
// dog1.sayColor();

// let dog2=new Dog('yellow');
// dog2.sayColor();
/**汪汪red
汪汪yellow**/

//优化，把方法放函数的prototype里
// function Dog(color){
//     this.color=color;
// }
// Dog.prototype.sayColor=function(){
//     console.log(this.color);
// }
// let dog1=new Dog('red');
// dog1.sayColor();

// let dog2=new Dog('yellow');
// dog2.sayColor();
/**结果为red
yellow**/

// class Dog{
//     constructor(color)
//     {
//         this.color=color;
//     }
//     sayColor()
//     {
//         console.log(`汪汪${this.color}`);
//     }
//     name='dog';
// }
// let dog1=new Dog('red');
// dog1.sayColor();
//输出结果为汪汪red

//instanceof
// class Dog{};
// let dog1=new Dog();
// dog1 instanceof Dog; //true
// [] instanceof Array; //true
// (function(){}) instanceof Function;//true
// Object instanceof Function;//true

// class Dog{
//     constructor(color)
//     {
//         this.color=color;
//     }
// }
// let dog1=new Dog('yellow');
// console.log(dog1.toString());//[object Object]

//Object.create
let person1={name:'饥人谷'};
let person2=Object.create(person1);
console.log(person2);//{}
console.log(person2.__proto__);//{ name: '饥人谷' }
console.log(person2.name);//饥人谷