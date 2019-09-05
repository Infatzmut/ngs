// Print "Hello World"
// Every second
// And stop after 5 times
let cont =0;
// After 5 times. Print "Done" and let Node exit.
/*const foo = 
    setInterval(()=>{
        cont++
        console.log("Hello World");
        if(cont == 5 ){
            console.log("Done");
            clearInterval(foo)
        }
    },1000)
*/
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

for(let i=0;i<5;i++){
   console.log("Hello world")
    sleep(1000)
   foo()
}
console.log("Done");


//}
//demo()