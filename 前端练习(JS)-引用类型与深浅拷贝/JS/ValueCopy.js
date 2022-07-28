function inputTest()
{
   let arr=[1,2,3];
   inc(arr);
   console.log(arr);
}
function inputTest1()
{
    let n=10;
    inc1(n);
    alert(n);
}
function inputTest2()
{
   let arr=[1,2,3];
   inc2(arr);
   alert(arr);
}
function shallowCopyTest()
{
    let copySrc=[3,4,5,6];
    let pasterTarget=shallowCopy(copySrc);
    alert(pasterTarget===copySrc);
    console.log(pasterTarget);
}
function deepCopyTest()
{
    let copySrc={
        name:'wqj',
        sex:'male',
        age:13
    };  
    let pasterTarget=deepCopy(copySrc);
    alert(pasterTarget===copySrc);
}
function inc(arr){
    arr.forEach((v,i)=>{
        arr[i]++;
    })

}

function inc1(n)
{
    n++;
}
function inc2(arr)
{
    arr.map(v=>++v)
}
function deepCopy(src) //深拷贝
{
  let result=Array.isArray(src)?[]:{};
  for(let key in src){
    if(typeof src[key]==='object'&&src[key]!==null)
    {
      result [key]=deepCopy(src[key]);
    }
    else 
    {
        result [key]=src[key];
    }
  }
  return result;
}
function shallowCopy(src) //浅拷贝
{
   
   return (src.map(v=>v));
   
}

