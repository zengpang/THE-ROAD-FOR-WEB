//基础正则表达式
//结果为true
// let str='饥人谷5岁了';
// console.log(/\d/.test(str));//字符串是否包含数字

//正则表达式简单应用 结果为false true
// let reg=/\d{11}/;//该正则表达式的意思是包含11个数字即11个以上的数字
// console.log(reg.test('1230'));
// console.log(reg.test('123012301230'));

//正则表达式应用1 结果为0 。(2) ['hello1', 'hello2'] 。hi jirengu,hi world。 (3)['hello1', 'jirengu,hello2', 'world']
// let str='hello1 jirengu,hello2 world';
// console.log(str.search(/hello\d/));//根据正则表达式搜索子字符串位置
// console.log(str.match(/hello\d/g));//根据正则表达式搜索并返回符合表达式的子字符串
// console.log(str.replace(/hello\d/g,'hi'));//根据正则表达式将符合正则表达式的子字符串的替换为'hi'
// console.log(str.split(/\s/));//根据正则表达式分割字符串为数组

//.的应用，表示任意字符
// let str='hello. world. d. fff. aa.fff. ff.'
// "hello;world. d. fff. aa.fff. ff.";
// console.log(str.match(/./g));

//字符串匹配 结果为true
// let reg=/jirengu/
// console.log(reg.test('hello jirengu'));

//范围匹配
// let reg=/不要[89][89][67]/
// console.log(reg.test('我们不要996'));//true
// console.log(reg.test('我们不要897'));//true
// console.log(reg.test('我们要965'));//false

//预定义匹配
// let reg=/ab\d./;
// console.log(reg.test('hello world'));
// console.log(reg.test('Hello World'));
// console.log(reg.test('hello Vorld'));

//匹配量词
// let str1='http://jirengu.com';
// console.log((/https?:\/\/.+/).test(str1));//true
// console.log((/https+:\/\/.+/).test(str1));//false
// console.log((/https*:\/\/.+/).test(str1));//true

// let str2='https://jirengu.com';
// console.log((/https?:\/\/.+/).test(str2));//true
// console.log((/https+:\/\/.+/).test(str2));//true
// console.log((/https*:\/\/.+/).test(str2));//true

// let str3='httpsssssss://jirengu.com';
// console.log((/https?:\/\/.+/).test(str3));//false
// console.log((/https+:\/\/.+/).test(str3));//true
// console.log((/https*:\/\/.+/).test(str3));//true

// var str='hello1 world hello2 123456 ruoyu hello3';
// console.log( str.match(/hello\d/g));//['hello1', 'hello2', 'hello3']
// console.log(str.match(/^hello\d/g));//['hello1']
// console.log(str.match(/hello\d$/g));//['hello3']

// var str2='hello1 whello9orld hello2 12-hello8-3456 jirengu ruoyu hello3';
// console.log(str2.match(/\bhello\d\b/g)); // ['hello1', 'hello2', 'hello8', 'hello3']

//匹配手机号
//规则:以1开头长度为11的数字
// let reg=/^1\d{10}$/;
// console.log(reg.test(' 13189890989'));//false
// console.log(reg.test('a13189890989b'));//false
// console.log(reg.test('13189890989'));//true
// console.log(reg.test('1318989098910'));//false

//匹配邮箱
//规则:字符串中间包含一个@,@后面包含个.
// let reg=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;//该正则表达式翻译出来为头一个字符为除了@和空格以外的所有字符且必须出现1次或1次以上，中间必须有一个@，且出现一个@后续不能出现@与空格字符，最后不能以@和空格字符结尾
// console.log(reg.test('hr@jirengu.com'));//true
// console.log(reg.test('admin@jirengu.中国'));//true
// console.log(reg.test('abc@cdd@jirengu.cn'));//false
// console.log(reg.test('abc@j rengu.com'));//false
// console.log(reg.test('2516629926qq.com'));//false

//贪婪模式与非贪婪模式
// let test= '123456789'.match(/\d{3,5}/g);//贪婪模式
// console.log(test);//结果为 ['12345', '6789']
// let test2='123456789'.match(/\d{3,5}?/g);//非贪婪模式
// console.log(test2);//结果为 ['123', '456', '789']

// let test3=`aa"hello" "world"bbdd`.match(/".+"/g);//贪婪模式
// console.log(test3);//结果为['"hello" "world"']
// let test4=`aa"hello" "world"bbdd`.match(/".+?"/g);//非贪婪模式
// console.log(test4);//结果为['"hello"', '"world"']

//分组
// //代表hunger这个单词最后字符r重复三遍也就是匹配hungerrr
// let test1=/hunger{3}/.test('hungerrr');
// console.log(test1);
// //代表hunger这个单词重复三遍，也就是匹配hungerhungerhunger
// let test2=/(hunger){3}/.test('hungerhungerhunger');
// console.log(test2);
//$1代表正则里分组匹配的内容即括号()里匹配的内容，输出hi8 world,hi6 jirengu
// let test3="hello8 world,hello6 jirengu".replace(/hello(\d)/g,'hi$1');
// console.log(test3);
// let test4=`<div>这就是 div</div>`.replace(/(<\/?)div(>)/g,'$1span$2');
// console.log(test4);

//前瞻
// console.log(/hello(?=Jirengu)/.test('helloJirengu'));//结果为true
// console.log(/hello(?=Jirengu)/.test('helloWorld'));//结果为false
// console.log(/hello(?!Jirengu)/.test('helloWorld'));//结果为true

//exec和replace
let reg=/\b\w+\b/g,temp;
while(temp=reg.exec('hello world,hi jirengu')){
    console.log(`${temp.index}:${temp[0]}`);
}
/*结果为
0:hello
6:world
12:hi
15:jirengu
*/

//repalce
let str='boder-top-color';
console.log(str.replace(/-(\w)/g,'a'));//结果为boderaopaolor
console.log(str.replace(/-(\w)/g,'$1'));//结果为bodertopcolor
console.log(str.replace(/-(\w)/g,function(){
    return '+';
}));//结果为boder+op+olor
console.log(str.replace(/-(\w)/g,function(match,$1){
    return $1.toUpperCase();
}));//结果为boderTopColor
console.log(str.replace(/-(\w)/g,function(match,$1){
    return '_'+$1.toUpperCase();
}));//结果为boder_Top_Color


//？的本质
// let test5=/(if)?Test/g.test('Test');
// console.log(test5);//输出为true
// let test6=/(if+)?Test/g.test('Test');
// console.log(test6);//输出为true
//匹配用户名
function validUsername(rawInput)
{
  //如果不满足全部为字幕数字下划线且长度为8~15 返回false
  if(!/^\w{8,15}$/.test(rawInput)) return false;
  //如果只包含一种返回false
  if(/(^[a-z]+$)|(^[A-Z]+$)|(^[0-9]+$)|(^\d+$)|(^_+$)/.test(rawInput)) return false;
  return true;
}

function vUsernameOnClick()
{
    if(validUsername("wqj21321321"))
    {
        alert("格式正确");
    }
    else
    {
        alert("格式错误");
    }
}


//作业1 
// let testStr='abcdegh';
// let testStr1='abvcdeq';
// console.log(/./.test('[abc]'));
// console.log(/./.test('\n'));

//作业1
// let testStr='abaaegh';
// let testStr1='zbvcdeq';
// console.log(/a*/.test(testStr));
// console.log(/./.test('\n'));



//作业2
function phoneTest()
{
    validPhone('13873258866')?alert("号码格式正确"):alert("号码格式错误");
}
function validPhone(phoneNumber)
{
   let regStr=/^1\d{10}$/;
   return regStr.test(phoneNumber);
}

//作业3
function passWordTest()
{
    validPassWord('wqWQ54__$$');

}
function validPassWord(passWord)
{
    let regStr=/\w\${2,}/;
    if(regStr.test(passWord)&&(passWord.length>=6&&passWord.length<=20))
    {
        alert("密码格式正确");
    }
    else
    {
        alert("密码格式错误");
    }
}
function changeTest()
{
    let str = `
    <div class="container">
      <div class="box"> 我是div </div>
    </div>
    `;
    let str2 = str.replace(/<div|<\/div>/g,(selectStr,changeStr)=>{
         switch(true)
         {
            case selectStr=='<div':{
                return '<span';
            };
            case selectStr=='</div>':{
                return '</span>';
            };
         }
    });
    console.log(str2);

}