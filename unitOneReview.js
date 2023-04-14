// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
let string = 'a'
let number = 0
let boolean = true

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguage = ['HTML','CSS','Javascript','Python']

/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE
console.log(codingLanguage[2])

/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE
let codingLanguage2 = codingLanguage.slice()

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
codingLanguage2.push('Java')

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop()

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift()

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift('guitar')

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1, 'glockenspiel')


// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/
// Type "if", then a start parenthesis, then a condition, then an end parenthesis, then a start brace, then the action to take if the condition is true, then an end brace, then "else", then another start brace, then the action to take if the condition is false, then another end brace.

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if (num % 2) {
    console.log('num is not an even number')
} else {
    console.log(num)
}

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if (70 < score) {
    console.log('The grade is A.')
} else if (40 < score) {
    console.log('The grade is B.')
} else if (10 < score) {
    console.log('The grade is C.')
} else {
    console.log('Failed.')
}

// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/
// Type "for", then a start parenthesis, then an action to run first, then a semicolon, then a condition, then another semicolon, then an action to run after each iteration, then an end parenthesis, then a start brace, then the action to run repeatedly as long as the condition is true, then an end parenthesis.

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0
for (var index in price) {
    totalPrice += price[index]
}

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/
console.log(totalPrice / price.length)


// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for (var index in colors) {
    if (colors[index] === 'red') {
        console.log('apple')
    } else if (colors[index] === 'green') {
        console.log('melon')
    } else if (colors[index] === 'yellow') {
        console.log('banana')
    }
}

// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/
// Planning is determining the purpose of the software. Analysis of requirements is determining what capabilities are necessary for that purpose. Design is determining what process would translate those capabilities into that purpose. Implementation is translating that process into minimum viable software. Testing and integration is iterating and improving that software to meet standards such as reliability and performance. Maintenance is continuing to iterate and improve that software as needs change or issues are found.

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/
// Git is a popular version control program. Github is a popular web host for Git repositories. git init is a Git command that creates a repository. git clone is a Git command that retrieves the contents of a repository. git status is a Git command that checks whether the current state of the files in a repository is different from the last state saved to the repository. git add is a Git command that adds a file to a repository. git commit is a Git command that saves the state of the files in a repository to the repository. git push is a Git command that uploads the repository to Github.
