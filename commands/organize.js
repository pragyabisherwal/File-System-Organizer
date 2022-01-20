const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };


  

function organizeFn(dirpath) {
    let destPath; //Input of a directory path where we will contain our oraganize file folder
  
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
        console.log("Please Enter A Valid Entry Path ");
      }
    }
  
    organizeHelper(dirpath, destPath);
  }
  
  //We are writing this function to categorize our files
  
  function organizeHelper(src, dest) {
    //WE are checking how many and which types of files are present --> Test Folder
  
    let childNames = fs.readdirSync(src); //Getting all the files and folders presented inside our source
  
    for (let i = 0; i < childNames.length; i++) {
      let childAddress = path.join(src, childNames[i]);
  
      //For checking is it folder or a file
      let isFile = fs.lstatSync(childAddress).isFile();
      // console.log(isFile)
  
      if (isFile == true) {
        let fileCategory = getCategory(childNames[i]);
        //console.log(childNames[i] + "   belongs to   " + fileCategory);
        sendFiles(childAddress, dest, fileCategory);
      }
    }
  }
  
  function getCategory(name) {
    let ext = path.extname(name); //Finding the extension of the file we passed
    ext = ext.slice(1); //Removing the dot from the extension
  
    for (let type in types) {
      let cTypeArr = types[type];
      //console.log(cTypeArr)
  
      for (let i = 0; i < cTypeArr.length; i++) {
        if (ext == cTypeArr[i]) {
          //We matched the extension with the values present in ctypeArr
          return type;
        }
      }
    }
  
    return "others";
  }
  
  function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory);
    //console.log(catPath)
  
    if (fs.existsSync(catPath) == false) {
      //Checking if the folder donot exist then make the folder
      fs.mkdirSync(catPath);
    }
  
    let fileName = path.basename(srcFilePath); //Name of the files
    let destFilePath = path.join(catPath, fileName); //Destined path for the files in newly created category folder
  
    fs.copyFileSync(srcFilePath, destFilePath); //Copied files from src to dest
  
    fs.unlinkSync(srcFilePath); //Deleted files from the src
  
    //  console.log(fileName + "  is copied to  " + fileCategory)
  }

  module.exports={
    organizeKey:organizeFn
}