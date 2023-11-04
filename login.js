function login(input) {

    let index = 0;
    let username = input[index];
    index++;

    let password = input[index];
    index++;

    let rightPassword = "";

    let wrongPasswordCounter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        rightPassword += username[i];
    }

    while (true) {

        if (password === rightPassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (password !== rightPassword) {
            wrongPasswordCounter++;
            if (wrongPasswordCounter >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }

        password = input[index];
        index++;

    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);