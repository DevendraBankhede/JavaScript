let pr = new Promise(function(res,rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if(rn > 5) res("resolve with " + rn);
        else rej("rejected with " + rn);
    },3000);
});

pr.then(function(val){
    console.log(val); 
}).catch(function(val){
    console.log(val);
});