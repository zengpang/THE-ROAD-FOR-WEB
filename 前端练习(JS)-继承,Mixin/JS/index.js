//ES3写法案例
// function Mammal(name){
//     this.name=name;
//     this.head='头';
//     this.neck='颈';
//     this.body='躯干';
// }
// Mammal.prototype.birth=function(){
//     console.log(this.name+'生了个宝宝');
// }
// let animal=new Mammal('大汪');
// animal.birth();

//ES6写法
// class Mammal{
//     constructor(name){
//         this.name=name;
//     }
//     head='头';
//     neck='额';
//     body='躯干';
//     birth(){
//         console.log(`${this.name}生了个宝宝`);
//     }
// }
// let animal=new Mammal('大汪');
// animal.birth();

//继承获取父类属性
// function Human(name){
//     //等价于Mammal(name),Mammal里面的this是当前的this
//     Mammal.call(this,name);
//     this.clothes='衣服';
// }
// Human.prototype.speak=function(){
//     console.log(this.name+'会说话');
// }
// let p=new Human('小明');
// console.log(p.head);
// console.log(p.clothes);
// p.speak();

//继承获取父类方法（ES3）
// function Human(name){
//     Mammal.call(this,name);
//     this.clothes='衣服';
// }
// Human.prototype=Object.create(Mammal.prototype);
// Human.prototype.constructor=Human;

// Human.prototype.speak=function(){
//     console.log(this.name+'会说话');
// }

// let p=new Human('小明');
// p.birth();
// p.speak();

//继承ES6写法
// class Human extends Mammal{
//     constructor(name){
//         super(name);
//         this.clothes='衣服';
//     }
//     speak(){
//         console.log(`${this.name}会说话`);
//     }

// }
// let p=new Human('小明');
// p.birth();
// p.speak();
/*
结果为
小明生了个宝宝
小明会说话
*/

// const target={a:1,b:2};
// const source={b:4,c:5};
// const returnedTaget=Object.assign(target,source);
// console.log(target);//结果为{ a: 1, b: 4, c: 5 }
// console.log(target===returnedTaget);//true

//Mixin基础版
// const mixin=(Base,mixins)=>Object.assign(Base.prototype,minins);
// const Fly={
//     canFly(){console.log('I Can fly');}
// }
// class Mammal{
//     birthChild(){
//         console.log(`I birth a baby`);
//     }
// }
// Object.assign(Mammal.prototype,Fly);
// let m=new Mammal();
// m.birthChild();
// m.canFly();
/*
结果为
I birth a baby
I Can fly
*/

//Mixin变异版
// const FlyMixin=Base =>class extends Base{
//     canFly(){console.log(`I can fly`)};
// }

// const SwimMixin=Base =>class extends Base{
//     canSWim(){console.log(`I can swim`)};
// }
// class Mammal{
//     birthChild(){
//         console.log(`I birth a baby`)
//     }
// }
// const FlyMammal=FlyMixin(Mammal);
// let m1=new FlyMammal();
// m1.canFly();
// const FlySwimMammal=SwimMixin(FlyMixin(Mammal));
// let m2=new FlySwimMammal();
// m2.canFly();
// m2.canSWim();
/* 
I can fly
I can fly
I can swim
*/

//ES3get,set实现方法
// const people={
//     firstName:'Micheal',
//     lastName:'Jackson',
//     get fullName(){
//      return `${this.firstName} ${this.lastName}`
//     },
//     set funllName(name){
//        let nameArr=name.split(/\s+/);
//        this.firstName=nameArr[0];
//        this.lastName=nameArr[1];
//     }
// }
// console.log(people.fullName);
// people.firstName='John';
// console.log(people.fullName);
// people.fullName=`Tom Cruse`;
// console.log(people.lastName);
/*
结果为
Micheal Jackson
John Jackson
Jackson
*/

//ES3写法（作业1）
// function People(name)
// {
//     this.name=name;
//     this.sayName=function(){
//         console.log(`我的名字是${this.name}`)
//     };
//     this.setName=function(name)
//     {
//         this.name=name;
//     };
// }
// function Doctor(name,profession)
// {
//     People.call(this,name);
//     this.profession=profession;

// }
// Doctor.prototype=Object.create(People.prototype);
// Doctor.prototype.constructor=Doctor;
// Doctor.prototype.sayProfession=function(){
//     console.log(`我的职业是${this.profession}`);
// }

//ES6 class写法（作业1）
class People{
    constructor(name)
    {
        this.name=name;
    }
    sayName()
    {
        console.log(`我的名字是${this.name}`)
    }
    setName(name)
    {
        this.name=name;
    }
}
class Doctor extends People{
 
    constructor(name,profession)
    {
      super(name);
      this.profession=profession;
    }
    sayProfession()
    {
        console.log(`我的职业是${this.profession}`);
    }
}
var p = new People('饥人谷')
console.log( p.name )  //"饥人谷"
p.setName('小谷')
console.log( p.name )  //"小谷"
p.sayName() // "我的名字是小谷"

var s = new Doctor('小饥', '医生')
console.log(s.profession)  // "医生"
s.sayProfession()   // "我的职业是医生"
s.sayName()          //"我的名字是小饥"