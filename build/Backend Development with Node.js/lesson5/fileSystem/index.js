"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
//Functions 
//.open(file , flag)
//flags:
// r - allows for the reading of a file
// r+ - allows for the reading and writing of a file, will overwrite content in the file
// w+ - allows for the reading and writing of a file, will create a file if it does not yet exist
// a - allows for reading and writing of a file and will append new content to the end of the file, not overwriting current content
// a+ - allows for reading and writing of a file, will create a file if it does not yet exist, and will append new content to the end of the file, not overwriting current content
// ex:
const writeData = () => __awaiter(void 0, void 0, void 0, function* () {
    const myFile = yield fs_1.promises.open('writeFile.txt', 'a+');
});
// --------------------
//Writing data to Files :
//.write(data , options)
/*
 - write data to files
 - create files that doesn't exist
 - does not overwrite Content
 - file must be opened
 - Dependent on open flag
 Use write if you perform an actions to an opened file
*/
//ex:
const writeData1 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const openFile = yield fs_1.promises.open('writeFile.txt', 'a+');
        yield openFile.write('\n add to file');
    }
    catch (err) {
        console.log(err);
    }
});
//.writeFile(path , data , options)
/*
 - write data to files
 - create files that doesn't exist
 - overWrite existing file
 Use for overWrite or create new file if we not have
*/
// ex:
const writeData2 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newFile = yield fs_1.promises.writeFile('writeFile.txt', 'Hello world');
    }
    catch (err) {
        console.log(err);
    }
});
// ------------------
//Reading data from Files
//.read(buffer , options);
/*
- read entire file
- read part of file
- must be opened first
- requires buffer to store the read data
//buffer : is a place to store the read data in the memory
*/
// ex:
const readData3 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buff = new (Buffer.alloc(26));
        let openFile = yield fs_1.promises.open('writeFile.txt', 'a+');
        yield openFile.read(buff, 0, 26);
        console.log(buff);
    }
    catch (err) {
        console.log(err);
    }
});
///readFile(path , options)
/*
- read entire file
- more popular choice
*/
// ex:
const readData4 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let readFile = yield fs_1.promises.readFile('writefile.txt', 'utf-8');
        console.log(readFile);
    }
    catch (err) {
        console.log(err);
    }
});
// ---------------------
//Moving and Renaming 
//.rename(original_path , new_path)
/*
- moving and renaming are the same
- user .rename() method
- change path argument
- use .mkdir() if directory does not exist
*/
// ex:
const moveData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.mkdir('src');
        const moveFile = yield fs_1.promises.rename('config.txt', 'src/config.txt');
    }
    catch (err) {
        console.log(err);
    }
});
// ----------------------
//Deleting files and Directories
/*
- remove file : use .unlink(path) method
- remove directory : use .rmdir(path)
 can  only remove empty directories
- use 3rd party module rimraf to delete directories with files
*/
// ex:
const removeData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let removeFile = yield fs_1.promises.unlink('scr/config.txt');
        yield fs_1.promises.rmdir('src');
    }
    catch (err) {
        console.log(err);
    }
});
