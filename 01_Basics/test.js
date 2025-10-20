function hello(getData, getNextData) {
    setTimeout(() => {
        console.log("Data is: ", getData);
     if(getNextData) {
        getNextData();
    }
}, 2000)};

    hello(1, () => {
        console.log("Data2 is loading......");   
    hello(2, () => {
        console.log("Data3 is loading......");
    })
    } 
);