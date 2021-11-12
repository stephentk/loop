/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var x = 1;

while (x <= 20){
    if (x % 3 === 0){
        console.log('FIZZ')
    }
    else if ( x % 5===0){
        console.log('buzz')
    }
    else if (x % 3 === 0 &&  x % 5 === 0){
        console.log('FizzBuzz')
    }
    else (
        console.log(x)
    )
    x = x + 1;
} 

/*
 * Programming Quiz
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

 var num = 99;
 while (num > 0){
     if (num === 1){
         console.log ("${num} bottle of juice on the wall! $(num)bottle of juice! Take one down, pass it around...${num=-1} bottles of juice on the wall!"
            );}
        else if (num === 2){
            console.log("${num} bottle of juice on the wall! $(num)bottle of juice! Take one down, pass it around...${num =-1} bottles of juice on the wall!" )
        }
        else{
        
         console.log("${num} bottle of juice on the wall! $(num)bottle of juice! Take one down, pass it around...${num= -1} bottles of juice on the wall!")   
        }
        num;
     
 }

 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here
var seconds = 60;

while(seconds >= 0){
    if (seconds === 50){
        console.log("Orbiter transfers from ground to internal power ")
    }
    else if ( seconds === 31){
        console.log ("Ground launch sequencer is go for auto sequence start ")
    } 
    else if (seconds === 16){
        console.log("activate launch pad sound suppression system")
    }
    else if (seconds === 10){
        console.log("Activate main engine hydrogen burnoff system ")
    }
    else if (seconds === 6){
        console.log ("Main engine start (")
    }
    else if (seconds === 0){
        console.log("Solid rocket booster ignition and liftoff!")
    }
    else{
        console.log('T - ${seconds}seconds')
    }

    seconds = seconds -1;
}

var seconds = 60;
while (seconds > 0){
    if (seconds === 50) {
        console.log("orbiter transfer from ground to internal power")
    }
    else if (seconds === 31){
        console.log("Ground launch sequencer is go for auto sequence start")
    }
    else if (seconds === 16){
        console.log("Activate launch pad sound suppression system")
    }
    else if (seconds === 10){
        console.log("Activate main engine hydrogen burnoff system")
    }
    else if (seconds === 6){
        console.log('Main engine start')
    }
    else if (seconds === 0){
        console.log ("solid rocket booster ignition and liftoff!")
    }
    else{
        console.log('T-' + seconds 'seconds')
    }
     seconds = seconds - 1
}
* QUIZ REQUIREMENTS
* - Your code should use a `for` loop
* - Your `for` loop should specify a starting condition `x` with the value of `9`
* - Your `for` loop should have a stop condition for the value of `x`
* - Your `for` loop should decrement `x` each time it executes
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/
for (x = 9;x >=1;x--){
console.log ("hello " + x)
}

* QUIZ REQUIREMENTS
* - Your code should use a `for` loop
* - Your `for` loop should specify a starting condition `x` with the value of `5`
* - Your `for` loop should have a stop condition for the value of `x`
* - Your `for` loop should increment `x` each time it executes
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/
for (x =5; x < 10; x++){
    console.log(x)
}
* QUIZ REQUIREMENTS
* - Your code should use a `for` loop
* - Your `for` loop should specify a starting condition `k` with the value of `0`
* - Your `for` loop should have a stop condition for the value of `k`
* - Your `for` loop should increment `k` each time it executes
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/
for (let k=0;k < 200; k ++){
    console.log(k);
}
/*
 * Programming Quiz: Factorials 
 */
let fact = 1;
let number = 12;
for (i = number;i >= 1;i--){
    fact = fact * i ;
  };
  let solution = fact
console.log(solution);

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
let row;
let seat;
for (row = 0;row <=25;row++){
    for(seat= 0;seat <100;seat++){
        console.log(row + "-" + seat)
    }
}
