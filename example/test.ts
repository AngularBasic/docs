// we get promises when we do asynchonous actions
// promises are like 'Futures' in other programming-languages
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// we can wait for the result of a promise by defining callback-funtions
function oldWay() {
    delay(1000, 12).then(result => { 
        console.log('result', result);
    });
}

// or we can use the fancy async-await Syntax
async function foo() {
    console.log('2 start await');
    const result = await delay(1000, 12);
    console.log('3 end await');
    console.log('4 result', result);
}



console.log('1 async start');
foo();
// oldWay();
console.log('5 async end');