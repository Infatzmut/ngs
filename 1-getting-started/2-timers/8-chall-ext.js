const sleep1 =(ms)=>new Promise(resolve =>(setTimeout(resolve,ms)))

//async function demo(){
    /*for(i=0;i<5;i++){
        console.log("Hello world")
        await sleep1(1000)
    }*/ 
    async function demo2(a){
    do{
        console.log("Hello world")
        await sleep1(1000)
        cont++

    }while(cont<a)

    console.log("Done");
}   
 demo2(5)   