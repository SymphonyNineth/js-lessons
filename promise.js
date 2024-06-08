const promise = new Promise((resolve, reject) => {
    function setTimeoutCallback() {
        resolve("TimedOut")
    }
    setTimeout(setTimeoutCallback, 3000);
});

function promiseCallback(value) {
    console.log(value);
}
promise.then(promiseCallback);


console.log("After")