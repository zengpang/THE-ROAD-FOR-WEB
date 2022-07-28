/**作用域范例——————Start**/ 
//  全局与函数环境 执行顺序为 in 全局 Start————>in foo————>in bar————>in 全局 end
// console.log('in 全局 Start');
// foo();
// console.log('in 全局 end');
// function foo(){
//     console.log('in foo');
//     bar();
//     function bar(){
//         console.log('in bar');
//     }
// }

// 执行结果为0
// let a=0;
// function foo(){
//     let a=1;
//     bar();
// }
// function bar(){
//     console.log(a);
// }
// foo();

//执行结果为1
// let a=0;
// function foo()
// {
//     let a=1;
//     bar();
//     function bar(){
//         console.log(a);
//     }
// }
// foo();

//执行结果为undefined,var声明前置了，但赋值还在原位
// let a=0;
// function foo(){
//     bar();
//     var a=1;
//     function bar(){
//         console.log(a);
//     }
// }
// foo();

//结果为0 5
// let a=0;
// function foo(){
//     let a=1;
//     bar();
// }
// function bar(){
//   console.log(a);//找个是创建函数域的变量a，自然指的是全局变量a
//   a=5;//修改了值
// }
// foo();
// console.log(a);

//结果为1 0
// let a=0;
// function foo(){
//     let a=1;
//     bar();
//     function bar(){
//         console.log(a);
//         a=3;
//     }
// }
// foo();
// console.log(a);

//结果为2
// var a=1
// function fn1(){
//     function fn2()
//     {
//         console.log(a);
//     }
//     function fn3(){
//         var a=4;
//         fn2();
//     }
//     var a=2;
//     return fn3;
// }
// var fnTest=fn1();
// fnTest();

//结果为1
// var a=1;
// function fn1(){
//     function fn3(){
//         var a=4;
//         fn2();
//     }
//     var a=2;
//     return fn3;
// }
// function fn2(){
//     console.log(a);
// }
// var fnTest=fn1();
// fnTest();

//结果为undefind
// var a=1;
// function fn1(){
//     function fn3(){
//         function fn2(){
//             console.log(a);
//         }
//         fn2();
//         var a=4;
//     }
//     var a=2;
//     return fn3;
// }
// var fnTest=fn1();
// fnTest();
/**作用域范例——————end**/ 

/**立即执行函数表达式——————Start**/ 
//结果为3  -1
// (function(){
//     //函数体
//     let a=1;
//     let b=2;
//     console.log(a+b);
// })();
// (function(){
//     //函数体
//     let a=3;
//     let b=4;
//     console.log(a-b);
// })()
/**立即执行函数表达式——————end**/ 

/*柯里化——————start*/
//结果为7
// function add(a){
//     return function(b){
//         console.log(a+b) ;
//     }
// }
// //add(3,4);
// add(3)(4);
/*柯里化——————end*/
function SumArgsOnClick() {
    let result = SumArgs(1, 2, 3);
    alert(result);
}
function SumArgs() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        if (typeof (arguments[index]) == "number") {
            sum += arguments[index];
        }
    }
    return sum;
}
let fn = (a, b) => { return a + b; };
function ArrowsOnClick() {
    alert(fn(3, 4));
}
function Test() {
    var a = 1
    function fn1() {
        function fn3() {
            function fn2() {
                console.log(a)
            }
            fn2()
            var a = 3
        }
        var a = 2
        return fn3
    }
    var fn = fn1()
    fn() //输出多少
}
function fibOnClick()
{
    alert(fib(6));
}
function fib(n)
{
   if(n==1||n==2)
   {
      return 1;
   }
   return fib(n-1)+fib(n-2);
}
