// LOOPING
// NESTED LOOP

// contoh for (kita tahu berapa kali pengulangan)
for(let i = 0; i < 3; i++){
    console.log(i);
}

// while saat kita tau bakal ngulang berapa kali
let i = 0;
while (i < 3){
    console.log('hello world');
    i++;
}

// while saat kita tau bakal ngulang berapa kali


for(let i = 0; i < 5; i++){
    for(let j = 0; j < i; j++){
        console.log(j);
    }
    console.log(i);
}