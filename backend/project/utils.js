function multiply(a,b){
    return a*b;
}

const log={
    Warning:(info)=>{
        console.log(`warning ${info}`);
    },
    error:(info)=>{
        console.log(`error ${info}`);
    }
}

module.exports={multiply,log};