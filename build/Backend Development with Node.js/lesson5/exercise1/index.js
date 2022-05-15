"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const csvtojson_1 = __importDefault(require("csvtojson"));
const app = (0, express_1.default)();
const inputFile = 'E:/Mostafa Ghonem/FCIS/My Code/FWD-Web-Course/lesson5/exercise1/users.csv';
const outputFile = 'E:/Mostafa Ghonem/FCIS/My Code/FWD-Web-Course/lesson5/exercise1/users.json';
app.get('/convert', (req, res) => {
    res.send('converting in process!');
    (0, csvtojson_1.default)().fromFile(inputFile).then((data) => {
        const newData = data.map((item) => {
            let first = item.first_name;
            let last = item.last_name;
            let phone = item.phone;
            if (item.phone === "")
                phone = 'missing data';
            return { first, last, phone };
        });
        fs_1.promises.writeFile(outputFile, JSON.stringify(newData));
    });
});
const port = 5000;
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
