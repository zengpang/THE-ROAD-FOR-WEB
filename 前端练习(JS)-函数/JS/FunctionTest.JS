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