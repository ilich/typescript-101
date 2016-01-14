"use strict";

function asyncMain() {
    const TIMEOUT = 1000;
    
    async function printWithDelay(messages: Array<string>|Array<number>) {
        for (let message of messages) {
            await delay(TIMEOUT);
            console.log(message);    
        }
        
        console.log("DONE.");
    }
    
    async function delay(timeout) {
        return new Promise<void>(resolve => {
            setTimeout(() => resolve(), timeout)
        });
    }
    
    printWithDelay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}

asyncMain();