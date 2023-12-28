export const add =(a,b,c,d)=>{return a+b+c+d}

export const spreadAdd =(...a)=>{
    let c = 0;
    //es6 for looop
    for(let val of a){
        c=c+val;
    }
    return c;
}
function testing(a,b){
    console.log("a:" +a)
    console.log("b:" +b)
    let c = a+b;
    return c;
}