"use strict";

function main() {
    const TIMEOUT = 1000;
    
    function printWithDelay(messages: Array<string>|Array<number>) {
        var calls = new Array<Promise<void>>();
        for (let message of messages) {
            calls.push(print(message));
        }
        
        Promise.all(calls).then(() => console.log("DONE."));
    }
    
    function print(msg) {
        return new Promise<void>(resolve => {
            delay(TIMEOUT).then(() => {
                console.log(msg);
                resolve();    
            });  
        });
    }
    
    function delay(timeout) {
        return new Promise<void>(resolve => {
            setTimeout(() => resolve(), timeout)
        });
    }
    
    printWithDelay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}

main();