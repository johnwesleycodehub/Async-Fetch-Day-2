/*
const p=parseInt(prompt("Enter your age"))
const a=new Promise((resolve,reject)=>{
    if(p>=18){
        resolve("Eligible to Vote")
    }
    else{
        reject("Not Eligible to Vote")
    }
});
console.log(a);
a.then((data)=>console.log(data)).catch((error)=>console.log(error))

function hel(num){
    return new Promise((resolve,reject)=>{
        if(num%2==0){
            resolve("Even number")
        }else{
            reject("Odd number")
        }
    })
}
hel(21).then((ele)=>console.log(ele)).catch((err)=>console.log(err))
*/

/*
function multi(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num*2),2000)
    })
}
multi(2)
.then((data)=>{
    console.log(data);
    return multi(data)
})
.then((ele)=>{
    console.log(ele);
    return multi(ele)
})
.then((nil)=>{
    console.log(nil);
    return multi(nil)
})
.then((des)=>{
    console.log(des);
    return multi(des)
})

.catch((error)=>console.log(error))
*/

/*
const tint1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=> resolve("Tint1 is resolved"),3000)
    }else{
       setTimeout(()=> reject("Tint1 is rejected"),3000)
    }
})
const tint2=new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=> resolve("Tint2 is resolved"),3000)
    }else{
       setTimeout(()=> reject("Tint2 is rejected"),3000)
    }
})
const tint3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=> resolve("Tint3 is resolved"),3000)
    }else{
       setTimeout(()=> reject("Tint3 is rejected"),3000)
    }
})
/*
.then((data)=>{
console.log(tint1,tint2,tint3);
})
*/
/*
const res=Promise.allSettled([tint1,tint2,tint3]).then((data)=>{
    data.forEach((res)=>console.log(res))
})
*/

/*
const res = fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((ele)=>{
    for(let i=0;i<ele.length;i++){
        console.log(ele[i].name.common);
    }
})
.catch((err)=>console.log(err))
*/

function ele(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}
let container = ele("div","container","","");
const h1 = ele("h1","text-center","title","Countries Weather");
const row = ele("div","row","","")

const res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((des)=>{
    for(let i=0;i<des.length;i++){
        const col=document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4"
        col.innerHTML=`
            <div class="card h-100">
            <div class="card-header">
            <h5 class= "card-title text-center">${des[i].name.common}</h5>
            </div>
            
        `
        row.append(col)
    }
})
container.append(row,h1)
document.body.append(container)
