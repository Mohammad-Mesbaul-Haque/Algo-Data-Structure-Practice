function step(nofStep) {
    for (let row = 1; row <= nofStep; row++) {
        let stair = '';
        for(let column = 1; column <= nofStep; column++){
            if (column <= row) {
                stair += '#';
            } else {
                stair += '-';
            }
        }
            console.log(stair);
    }
}

// call function
step(5);
// step(10)
// step(20)
// step(12)