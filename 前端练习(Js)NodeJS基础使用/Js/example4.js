//nodeJS引用第三方包，在引用之前
const markdownIt=require(`markdown-it`);
const fs=require(`fs`);
let md=new markdownIt();
fs.readFile(`./前端练习(Js)NodeJS基础使用/a.md`,`utf-8`,(err,text)=>{
    if(err) throw err
    console.log(text);
    let html=md.render(text);
   
    fs.writeFile(`./前端练习(Js)NodeJS基础使用/a.html`,html,err=>{
        if(err) throw err;
        console.log(`转换完成`);
    })
})
