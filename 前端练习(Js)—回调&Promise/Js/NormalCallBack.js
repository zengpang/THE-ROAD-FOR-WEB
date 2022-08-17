const delay=(time,callback)=>{
  setTimeout(()=>{
    callback();
  },time)
};
delay(1000,()=>{
    console.log(`第一次执行`);
    delay(1000,()=>{
        console.log(`第二次执行`);
        delay(1000,()=>{
            console.log(`第三次执行`);
        })
    })
})