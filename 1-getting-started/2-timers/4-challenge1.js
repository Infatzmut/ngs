const theOneFunc = (x,y) => {
    timer(x)
    timer(y)
};

const timer = (a) =>setTimeout(()=>console.log(`Hello after ${a} seconds`),a*1000)
// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
theOneFunc(4,8)