//案例1
// function Counter(){
//     let num=0;
//     function add(){
//         num++;
//         console.log(num);
//     }
//     return add;
// }

// let addOne=Counter();
// addOne();
// addOne();
/**
 执行结果为
1
2 
 */

//封装数据
// const cache=(()=>{
//     const store={}
//     return {
//        get(key){
//          return store[key]
//        },
//        set(key,val)
//        {
//          store[key]=val
//        },
//        remove(key){
//          delete store[key]
//        }
//     }
// })()
// console.log(cache);
// cache.set(`name`,`饥人谷`);
// cache.get(`name`);
// cache.remove(`name`);
/**
 {
  get: [Function: get],
  set: [Function: set],
  remove: [Function: remove]
}
 */

//暂存数据
// function sum(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// const sum1 = sum(1);
// const sum2 = sum(2);
// console.log(sum1(3));
// console.log(sum2(3));
/**
 结果为
4
5
 */

//让对象拥有私有属性
// class People{
//     constructor(){
//         let name;
//         Object.assign(this,{
//             setName(newName){
//               name=newName;
//             },
//             getName(){
//                 return name;
//             }
//         })
//     }
//     sayHi(){
//         console.log(`Hi,${this.getName()}`);
//     }
// }
// let p1=new People();
// p1.setName(`ruoyu`);
// p1.name;
// p1.getName();
// p1.sayHi();
//结果为Hi,ruoyu

//高阶函数
// const makeUrl=domain=>path=>`https://${domain}${path}`;
// const makergUrl=makeUrl(`jirengu.com`);
// const makdeXdmlUrl=makeUrl(`xiedaimala.com`);
// const url1=makergUrl(`/about`);
// const url2=makdeXdmlUrl(`/index`);
// console.log(url1);
// console.log(url2);
// /**
//  结果为
//  https://jirengu.com/about
// https://xiedaimala.com/index
//  */

//面试题1:以下代码输出什么？是0、1、2、3、4吗？
// for(var i=0;i<5;i++)
// {
//   setTimeout(function(){
//     console.log(`clock:`+i);
//   },0)
// }
/**
结果为
clock:5
clock:5
clock:5
clock:5
clock:5 
 */
//所以答案是：不是

//如果必须要求输出0.1.2.3.4，可以声明一个匿名函数包裹住定时器，使定时器与传入的实参形成闭包，以此输出0、1、2、3、4
// for(var i=0;i<5;i++)
// {
//   (function(i){
//     setTimeout(function(){
//       console.log(`clock`+i);
//     },0)
//   })(i)
// }
/**
输出为
clock0
clock1
clock2
clock3
clock4
 */

//面试题2 以下代码输出什么?
// function makeCounter(){
//   let count=0;
//   return function(){
//     return ++count
//   }
// }
// let counter=makeCounter();
// let counter2=makeCounter();

// console.log(counter());//1
// console.log(counter());//2
// console.log(counter2());//1
// console.log(counter2());//2

// //面试题3，补全代码，实现数组按姓名，年纪，任意字段排序
// let users=[
//   {name:"Bob",age:20,company:"Baidu"},
//   {name:"Cat",age:18,company:"Alibaba"},
//   {name:"Ann",age:19,company:"Tecent"}
// ]
// users.sort(byName);
// users.sort(byAge);
// users.sort(byFeild(`company`));
// users.sort(byFeild(`age`));

// //答案
// function byName(user1,user2){

//   return user1.name>user2.name?1:-1;
// }
// function byAge(user1,user2){
//   return user1.age>user2.age?1:-1;
// }
// function byFeild(field){
//   return function(user1,user2){
//     return user1[field]>user2[field]?1:-1;
//   }
// }
// console.log(users.sort(byFeild(`company`)));



// const people={
//   firstName:'Micheal',
//   lastName:'Jackson',
//   get fullName(){
//    return `${this.firstName} ${this.lastName}`
//   },
//   set funllName(name){
//      let nameArr=name.split(/\s+/);
//      this.firstName=nameArr[0];
//      this.lastName=nameArr[1];
//   }
// }
// console.log(people.fullName);
// people.firstName='John';
// console.log(people.fullName);
// people.fullName=`Tom Cruse`;
// console.log(people.lastName);

//作业1
// let Cache= (function(){
//     const stuInfo={};
//     return {
//        get(type)
//        {
//         return stuInfo[type];
//        },
//        set(type,value)
//        {
//         stuInfo[type]=value;
//        },
//        remove(type)
//        {
//         delete stuInfo[type];
//        }
//     }
// })();
// console.log(Cache)  //{get: ƒ, set: ƒ, remove: ƒ}
// Cache.set('name', '饥人谷');
// console.log(Cache.get('name')); // '饥人谷'
// Cache.remove('name');
// console.log(Cache.get('name'));  // undefined

//作业2
// function sum(a){
//  return function (b){
//     return a+b;
//   }
// }
// console.log( sum(2)(3) === 5 )
// console.log( sum(4)(5) === 9 )

//作业3
// class People{
//    constructor()
//    {
//      let firstName;
//      let lastName;
//      Object.assign(this,{
//         setFirstName(name)
//        {
//         firstName=name;
//        },
//         getFirstName()
//        {
//         return firstName;
//        },
//        setLastName(name)
//        {
//         lastName=name;
//        },
//         getLastName()
//        {
//         return lastName;
//        },
    
//      });
  
//    }
//    getFullName()
//    {
//     return `${this.getFirstName()}${this.getLastName()}`
//    }
   
// }
// let p1 = new People();
// p1.setFirstName('王');
// p1.setLastName('二狗');
// console.log(p1.firstName);        // undefined
// console.log(p1.lastName); // undefined
// console.log(p1.getFirstName()); //'王'
// console.log(p1.getLastName()); // '二狗'
// console.log(p1.getFullName());// '王 二狗'

//作业4
// for(var i=0;i<5;i++)
// {
//   (function(i){
//     setTimeout(function(){
//       console.log(`clock`+i);
//     },0)
//   })(i)

//作业5
// let users = [
//   { name: "Bob", age: 20, company: "Baidu" },
//   { name: "Cat", age: 18, company: "Alibaba" },
//   { name: "Ann", age: 19, company: "Tecent" }
// ]
// console.log( users.sort(orderBy('company', 'asc')) )  // company字段 以升序(从小到大)排序
// console.log( users.sort(orderBy('age', 'desc'))  )     //age 字段以降序(从大到小)排序

// function orderBy(type,orderDir)
// {
//   return function(user1,user2)
//   {
    
//      return (user1[type]>user2[type]?1:-1)*(orderDir==`asc`?1:-1);
//   }
// }


//主观题
// let count=500 //全局作用域
// function foo1() {
//   let count = 0;//函数全局作用域
//   function foo2() {
//     count++;//函数内部作用域
//     console.log(count);
//     return count;
//   }
//   return foo2;//返回函数
// }
// let result = foo1();
// result();//结果为1
// result();//结果为2
// console.dir(result);

//主观题案例1
// function Test1()
// {
//   let c=3;
//   function Test2(a,b)
//   {
//     c++;
//     console.log(a+b+c);
//   }
//   return Test2;
// }
// let result=Test1();
// result(1,3);
// result(1,3);

//未闭包代码
function Test1()
{
  return Test1;
}

//闭包代码
function Test2()
{
  let a=0;
  function Test3()
  {
    console.log(a++);
  }
  return Test3;
}
let Test1_Result1=Test1();
let Test1_Result2=Test1();
let Test2_Result1=Test2();
let Test2_Result2=Test2();
console.log(Test1_Result1===Test1_Result2);//结果为true
console.log(Test2_Result1===Test2_Result2);//结果为false