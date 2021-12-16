
// creates the PLAY function
function play() {

//Declares the variable for the first die, assigns a ceiling by usaing the randon number generator and assigning an upper limit of 6
    var die1 = Math.ceil(Math.random() * 6);

//Declares the variable for the second die, assigns a ceiling by usaing the randon number generator and assigning an upper limit of 6
    var die2 = Math.ceil(Math.random() * 6);

//Declares a variable that is the sum of the two dice
var sum = die1+die2

//Creates the first half of the dice roll, labels it Die 1, and attaches the value generated in line 6
document.write("Die 1 = " + die1)

//Line break
document.write("<br/>")

//Creates the first half of the dice roll, labels it Die 2, and attaches the value generated in line 9
    document.write("Die 2 = " + die2)

//Line break
    document.write("<br/>")

//Writes "Sum" and atttaches the values created in line 12
    document.write("Sum = " + sum)

//Line break
    document.write("<br/>")

//Creates a conditional statement, defines the criteria using the sum from line 12, displays the results if they are, and tells the user they are a loser
if (sum == 7 || sum == 11)
{ document.write("CRAPS - you lose")

//Line break
document.write("<br/>")
}

//Creates another set of conditions, defines the satisfaction criteria as the die values being equal by comparing the two Die values, displays the results, and tells the user they've won 
else if (die1== die2 && die1%2 == 0)
{
document.write("DOUBLES - you win")

//Line break
document.write("<br/>")
}

}
//If none of the criteria for the IF/ELSE conditions are met, displays simple craps to the user
document.write("Simple Craps")

//Line break
document.write("<br/>")
play()