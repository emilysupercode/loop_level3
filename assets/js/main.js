// ==================================
// lvl 3_1
// ==================================

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

function splitText() {
    let newArray = []; // place to store the array I'm creating below
    let numberOfExcerpts = 1; // defines x starting point for x of y statement
    let totalExcerpts = Math.ceil(text.length / 100); // split the total number of characters into blocks of 100 characters

    for (i = 0; i < text.length; i += 100) { // for instances where i is shorter than the total length of the text, starting with i = 0 and increasing each time by 100, do the following:
        let excerpt = text.substring(0 + i, 99 + i); // define a new variable, excerpt, for which we are using a substring of the original text. the first excerpt will be a substring from (0+0 to 99+0), the second from (0+100 to 99+100), with i increasing per our defined increment by 100s
        newArray.push(`${excerpt} - ${numberOfExcerpts++} of ${totalExcerpts}`) // push the following to our new string: "variable excerpt" - x of y

    } console.log(totalExcerpts) // 27
    console.log(newArray) // output is new array
}

splitText();

// ==================================
// lvl 3_2
// ==================================
let numArr = [5, 22, 15, 100, 55]

for (let i = 0; i < numArr.length; i++) { // go through each item in the array one by one
    for (let j = 2; j < numArr[i]; j++) { // for all possible values (j) that are smaller than the value of the number in that index in the array 
        if (numArr[i] % j === 0) {
            document.querySelector("#output").innerHTML += `${numArr[i]} is divisible by ${j} <br>`;
        }
    }
}

// ==================================
// lvl 3_3
// ==================================
let loopMe = document.querySelector("#loopButton");
loopMe.addEventListener("click", loopDeLoop)

function loopDeLoop(event) {
    event.preventDefault;
    let loopArray = [];
    let numberInput = document.querySelector("#numberInput");
    let numberInputValue = Number(numberInput.value);
    let halfNumberInputValue = Math.floor(numberInputValue / 2);
    let outputLoop = document.querySelector("#outputLoop");
    let o = "o";
    let ohZero = "o0";
    let textOutput = "";
    let input = "";

    while (i > 0) {
        let i = numberInputValue;
        i--;

        if (numberInputValue === 0) {
            outputLoop.style.color = "red";
            outputLoop.innerHTML = "Input value must be greater than 0";
            break;

        } else if (numberInputValue % 2 === 0) {

            for (input = numberInputValue; input > 0; input--) {
                loopArray.push(o);
            }
            let allOhs = (loopArray.toString()).replaceAll(",", "")
            outputLoop.style.color = "lime";
            outputLoop.style.fontSize = "24px";
            return textOutput = outputLoop.innerHTML = `L${allOhs}p`;

        } else {

            for (input = halfNumberInputValue; input > 0; input--) {
                loopArray.push(ohZero)
            }
            loopArray.push(o);
            console.log(loopArray)
            let mixedOhZero = (loopArray.toString()).replaceAll(",", "")
            outputLoop.style.color = "lime";
            outputLoop.style.fontSize = "24px";
            return textOutput = outputLoop.innerHTML = `L${mixedOhZero}p`;
        }
    }
}

// ==================================
// lvl 3_4
// ==================================


let maxNumberEl = document.getElementById("maxNumber");
let firstDivisorEl = document.getElementById("firstDivisor");
let secondDivisorEl = document.getElementById("secondDivisor");

function addAll(event) {
    event.preventDefault();

    let maxNumberVal = Number(maxNumberEl.value);
    let firstDivisorVal = Number(firstDivisorEl.value);
    let secondDivisorVal = Number(secondDivisorEl.value);
    let totalAddedValue = document.getElementById("outputNumber");

    for (let i = 1; i <= maxNumberVal; i++) {
        if (i % firstDivisorVal === 0) {
            console.log(i)
            totalAddedValue.innerHTML = Number(totalAddedValue.innerHTML) + i;
        } else if (i % secondDivisorVal === 0) {
            console.log(i)
            totalAddedValue.innerHTML = Number(totalAddedValue.innerHTML) + i;
        }
    }

    if (maxNumberVal <= 0) {
        alert("You must select a maximum number greater than zero.");
    }

    if (firstDivisorVal === secondDivisorVal) {
        alert("Please select two different divisors.")
    }
}
