// let prm=new Promise(function(res, rej){
//     setTimeout(() => {
//         let rn=Math.floor(Math.random()*10)
//         if(rn<5) res(rn)
//         else rej(rn)
//     }, 2000);
// })

// prm.then(function(val){
//         console.log(`resolved with no:${val}`);
        
// }).catch(function(val){
//     console.log(`rejcted with no:${val}`)
// })





// fetch
fetch('https://randomuser.me/api/')
.then(rowdata=>rowdata.json())
.then(data=> console.log("user:",data.results[0].name.first,  data.results[0].name.last))