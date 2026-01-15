function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunning0peration(){
    return 42;
}

async function run() { 
    console.log("Start!!");
    await promiseTimeout(2000);
    const response = await longRunning0peration();
    console.log(response);

    console.log("Stop!!");

}

run();