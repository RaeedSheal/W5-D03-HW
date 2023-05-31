// Question 1

const Reverse = (number) => {
    return Number(String(number).split("").reverse().join(""));
};

console.log("Q1- reverse 123456: " + Reverse(123456));

//Question 2

const upperCase = (str) => {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
};

console.log("Q2- Uppercase: " + upperCase("hello my name"));

//Question 3

const countVowels = (str) => {
    let nbOfVowels = 0;
    for (char of str.split("")) {
        if (
            char == "o" ||
            char == "a" ||
            char == "i" ||
            char == "u" ||
            char == "e"
        ) {
            nbOfVowels++;
        }
    }
    return nbOfVowels;
};

console.log("Q3- Vowels in a String: " + countVowels("Javascript is awesome"));

//Question 4

const isPrime = (number) => {
    let isPrime = true;
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
};

console.log("Q4- Is Prime: " + isPrime(5));

//Question 5

const LongestWord = (str) => {
    let arr = str.split(" ");
    let longestWord = " ";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
};

console.log("Q5- Longest word: " + LongestWord("Kingdom of Saudi arabia"));

//Question 6

const orderString = (str) => {
    return (arr = str.split("").sort().join(""));
};
console.log("Q6- Order String: " + orderString("webmaster"));

//Question 7

const sum = (nb1, nb2) => {
    return nb1 + nb2;
};
console.log("Q7- Sum 2 numbers: " + sum(-3, -6));

//Question 8

const calcAge = (age) => {
    return age * 365;
};
console.log("Q8- age in days: " + calcAge(20));

//Question 9

const howManySeconds = (hours) => {
    return hours * 60 * 60;
};

console.log("Q9- how many seconds in hour: " + howManySeconds(10));

//Question 10

const lessThanOrEqualToZero = (nb) => {
    if (nb > 0) return false;
    else return true;
};

console.log("Q10- less Than Or EqualT o Zero: " + lessThanOrEqualToZero(2));

//Question 11

const num_of_digits = (nb) => {
    return String(nb).split("").length;
};

console.log("Q11- number of digits: " + num_of_digits(23232));

//Question 12

const toArray = (obj) => {
    //console.log(Object.entries(obj));
    return Object.entries(obj);
};

console.log("Q12- obj to array: " + toArray({ shrimp: 15, tots: 12 }));

//Question 13

const paths = (nb) => {
    if (nb === 0 || nb === 1) return 1;
    let factorlial = 1;
    for (let i = 1; i <= nb; i++) {
        factorlial *= i;
    }
    return factorlial;
};

console.log("Q13- number of paths: " + paths(9));

//Question 14

const doubleLetters = (str) => {
    let arr = str.split("");
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) return true;
    }
    return false;
};

console.log("Q14- is doubleLetters: " + doubleLetters("yummy"));

//Question 15

const currentDate = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

console.log("Q15- current Date: " + currentDate());

//Question 16

const getDays = (date1, date2) => {
    return (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
};

console.log(
    "Q16- difference between two days: " +
        getDays(new Date("July 20, 2019"), new Date("July 30, 2019"))
);

//Question 17

// const countAnimals = (str) => {
//     let animals = [
//         "dog",
//         "cat",
//         "bat",
//         "cock",
//         "cow",
//         "pig",
//         "fox",
//         "ant",
//         "bird",
//         "lion",
//         "wolf",
//         "deer",
//         "bear",
//         "frog",
//         "hen",
//         "mole",
//         "duck",
//         "goat",
//     ];
//     let arr = str.split("");
//     for(let i = 0; i<arr.length;i++){
//         for(let j = 0; j<anima)
//     }

// };

// console.log("Q17- count animals in a string: " + countAnimals());

//Question 18

const getLargerNumber = (nb1, nb2) => {
    if (nb1 > nb2) {
        return nb1;
    } else {
        return nb2;
    }
};

console.log("Q18- get larger number: " + getLargerNumber(0, 2));

//Question 19
const mostExpensive = (obj) => {
    let arr = Object.entries(obj);
    let highestPrice = [0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] > highestPrice[1]) {
            highestPrice = arr[i];
        }
    }
    return `The most expensive one is the ${highestPrice[0]}`;
};
console.log(
    "Q19- jewelry highest price: " +
        mostExpensive({
            "Silver Bracelet": 280,
            "Gemstone Earrings": 180,
            "Diamond Ring": 3500,
        })
);

//Question 20
