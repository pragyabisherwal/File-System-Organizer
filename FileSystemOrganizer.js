//Created all of them module and importing them
const help = require("./commands/help")
const organize = require("./commands/organize")
const tree = require("./commands/tree")


const fs = require("fs");
const path = require("path");


let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch (command) {
  case "tree":
    tree.treeKey(inputArr[1]);   //Using the exported function
    break;
  case "organize":
    organize.organizeKey(inputArr[1]);  //Using the exported function
    break;
  case "help":
    help.helpKey();
    break;
  default:
    console.log("Enter valid command"); //Using the exported function
    break;
}




