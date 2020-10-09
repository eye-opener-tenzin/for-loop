console.log('Print all number bewteen -10 and 20')
for (var i = -10; i <= 20; i++)  {
    console.log(i)
}


console.log('Print all even between 10 and 40')

for (var j = 10; j <= 40; j++) {
    console.log(j)
}

console.log('Printing all old number between 300 and 333')

for (var k = 300; k <= 333; k++) {
    if (k % 2 !== 0) {
        console.log(k)
    }
}

console.log('Print all number divisible by 5 and 3 between 5 and 50')
for (var i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}