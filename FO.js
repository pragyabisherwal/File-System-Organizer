let inputArr = process.argv[2]

//node     FO.js      Pragya
// 0         1          2

//console.log(inputArr) // <----Pragya on index 2

let secondArr = process.argv.slice(2)
//console.log(secondArr) //<----- return everything written after node FO.js 
//TODO: node     FO.js  // ---->Pragya    is   a   good    girl <-----these words will return in  a form of array


//let command = inputArr //<---For inputArr
let command = secondArr[0]  //<---For secondArr ----> Pragya    is       a      good       girl
//                                                    0idx     1idx     2idx      3idx       4idx
//  node     FO.js                tree ourgame
// <-------------------------->    0idx   1idx
//using slice this got removed
//so in command we get tree and hence output as ---->Tree Implemented

switch(command)
{
    case "tree":
        console.log("Tree Implemented")
        break;
    case "organize":
        console.log("Organize Implemented")
            break;
    case "help":
        console.log("Help Implemented")
                break;
    default:
        console.log("Enter valid command")
        break;
}