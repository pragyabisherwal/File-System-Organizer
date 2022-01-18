const fs = require("fs");
const path = require("path");
let inputArr = process.argv.slice(2);

let command = inputArr[0];

switch (command) {
  case "tree":
    console.log("Tree Implemented");
    break;
  case "organize":
    organizeFn(inputArr[1]);
    break;
  case "help":
    helpfn();
    break;
  default:
    console.log("Enter valid command");
    break;
}

function helpfn() {
  console.log(`List of All the Commands
                 1. Tree Command -> node FileSystem.js tree <dirname>
                 2. Organize Command -> node FileSystem.js organize <dirname>
                 3. Help Command -> node FileSystem.js help
        
    `);
}

function organizeFn(dirpath) {
  let destPath;  //Input of a directory path where we will contain our oraganize file folder

  if (dirpath == undefined) {
    console.log("Please Enter A Valid Entry Path"); // Checking whether the path passed is invalid
    return;
  } else {
    let doesExist = fs.existsSync(dirpath); // Checking whether the path exists or not

//If it exists only then we will create the new folder
    if (doesExist == true) {
      destPath = path.join(dirpath, "organized_files");

    //We need to check that the destPath folder which we will be creating should not already exist there
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath); //Creating a folder at that path because it doesnot already exist
      } else {
        console.log("This Folder Already Exists");
      }
    } else {
      console.log("Please Enter A Valid Entry Path");
    }
  }
}
