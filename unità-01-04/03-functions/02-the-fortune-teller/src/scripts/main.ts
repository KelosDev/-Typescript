function tellFortune(nchild:number, partName:string, geoLoc:string, job:string): void {
    if(nchild>1){
        console.log(`You will be a ${job} in ${geoLoc}, and married to ${partName} with ${nchild} kids`);    
    }
    else{
        console.log(`You will be a ${job} in ${geoLoc}, and married to ${partName} with ${nchild} kid`);  
    }
}

tellFortune(1,`Julia`,`Russia`,`Web Developer`);