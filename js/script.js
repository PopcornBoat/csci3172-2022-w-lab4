/**
 *  @author Yuxuan Wang
 *  @email yx703587@dal.ca
 *  @descp CSCI 3172 Lab 4 
 */


// code for requirement (a), changing bg-color on different options
const div = document.querySelector("#select-container");
div.addEventListener("change", bgColourChangeOnOption, false);
// switch case based colour change, onchange event
function bgColourChangeOnOption() {
    let container = document.querySelector("#week-days");
    let days = container.options[container.selectedIndex].value;

    switch (days) {
        case 'Monday':
            div.style.backgroundColor = "#d48a80";
            break;
        case 'Tuesday':
            div.style.backgroundColor = "#7f8678";
            break;
        case 'Wednesday':
            div.style.backgroundColor = "#c1abad";
            break;
        case 'Thursday':
            div.style.backgroundColor = "#c7c7bb";
            break;
        case 'Friday':
            div.style.backgroundColor = "#efefdf";
            break;
        case 'Saturday':
            div.style.backgroundColor = "#97928a";
            break;
        case 'Sunday':
            div.style.backgroundColor = "#d1d4d9";
            break;
        default:
            div.style.backgroundColor = "#fff";
            break;
    }
}


// requirement (b)
// get the user input number and do checks
const button = document.querySelector('input[name="submit"]');
button.addEventListener("click", check, false);

/**
 * check() function, check if the user input number is odd/even, prime/composite,
 *  and it's range: 50 - 75 - 100
 */


function check(e) {
    e.preventDefault();
    let input = document.querySelector('input[name="user-in"]').value;
    input = parseInt(input, 10);
    let res = [];
    // check odd / even
    if (input % 2 === 0) { res.push("even"); }
    else { res.push("odd"); }

    // check prime
    let is_prime = isPrime(input);
    if (is_prime === true) { res.push("prime"); }
    else if (is_prime === false) { res.push("composite"); }
    else { res.push(is_prime); }

    // find range
    input <= 50 ? res.push("less than or equal to 50") :
        input > 50 && input <= 75 ? res.push("greater than 50 and less than or equal to 75") :
            input > 75 && input <= 100 ? res.push("greater than 75 and less than or equal to 100") :
                input > 100 ? res.push("greater than 100") : console.log("error on range determin");



    // display result on page
    printRes(res);
}

// helper function to check prime/composite
function isPrime(num) {
    if (num === 2 || num === 3) { return true; }
    if (num < 2) { return "neither prime nor composite"; }

    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// helper function to print result in a <p> tag
function printRes(result) {
    let p = document.querySelector("#result");
    let res = "The number entered is an " + result[0] + " " + result[1] +
        " number " + result[2] + ".";
    p.textContent = res;
}