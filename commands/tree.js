const fs = require("fs");
const path = require("path");

function treeFn(dirpath) {
    if (dirpath == undefined) {
      console.log("Please Enter A Valid Entry Path"); // Checking whether the path passed is invalid
    } else {
      let doesExist = fs.existsSync(dirpath);
      if (doesExist == true) {
        treeHelper(dirpath, "");
      }
    }
  }
  
  function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();   //For checking is it folder or a file
  
    if (isFile == true) {                             //If it is a file we will just print its basename
      let fileName = path.basename(targetPath);
      console.log(indent + "├──" + fileName);
    } else {
      let dirName = path.basename(targetPath);       //If it is a folder we will save its name and will now go into its content
      console.log(indent + "└──" + dirName);
  
      let children = fs.readdirSync(targetPath);    //Children of test folder--->Reading the files or folders inside the directory passed
      // console.log(children)
  
      for (let i = 0; i < children.length; i++) {          //looping over each of them and making its address by joining the dir path and the basename of the file or folder inside that dir.
        let childPath = path.join(targetPath, children[i]);
        //console.log(childPath)
        treeHelper(childPath, indent + "\t");      //Recursively calling the same function for eg we have a folder as a childer it will recursively call helper and will prints its content by checking file and folder and will return when all the branch will be explore
      }
    }
  }
  
  module.exports={
    treeKey:treeFn
}