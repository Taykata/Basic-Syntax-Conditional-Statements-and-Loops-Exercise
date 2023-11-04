function triangleOfNumbers(n) {

    let buff = "";

    for (let i = 1; i <= n; i++) {
        buff = "";
        for (let num = 1; num <= i; num++) {
            buff += `${i} `;
        }
        console.log(buff);
    }

}

triangleOfNumbers(5);