//初次使用NodeJS读写文件模块
//查找文件读写模块
const fs=require(`fs`);
//读取文件
fs.readFile(`./前端练习(Js)NodeJS基础使用/a.md`,`utf-8`,(err,text)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    //读取文本转换为大写
    text=text.toUpperCase();
    //写入文件如果文件不存在创建文件
    fs.writeFile(`./前端练习(Js)NodeJS基础使用/a-after.md`,text,err=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`写入完成`);

    })
});
