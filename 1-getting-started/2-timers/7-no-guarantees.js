/*setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);*/

/*const test = setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);*/
const abc = ()=>setTimeout(()=>imprime(),500)

const imprime = ()=>console.log("Hello after 0.5 seconds. Maybe!")
//const test1 =setTimeout(()=>imprime(),500)
for (let i = 0; i < 10; i++) {
  // Block Node Synchronously
  //setTimeout(()=>imprime(),500)
  abc()

}
