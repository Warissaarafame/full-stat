const promise = new prompt((resolve,reject) => {
    const res = true;
    if (res) {
        resolve("resolve!");
    }else{
        reject(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);