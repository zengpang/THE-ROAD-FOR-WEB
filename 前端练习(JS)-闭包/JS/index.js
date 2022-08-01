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
const makeUrl=domain=>path=>`https://${domain}${path}`;
const makergUrl=makeUrl(`jirengu.com`);
const makdeXdmlUrl=makeUrl(`xiedaimala.com`);

const url1=makergUrl(`/about`);
const url2=makdeXdmlUrl(`/index`);
console.log(url1);
console.log(url2);
/**
 结果为
 https://jirengu.com/about
https://xiedaimala.com/index
 */