"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
//Middlewares
app.use((0, morgan_1.default)('tiny'));
//routes handler
app.use('/', routes_1.default);
const port = 5000;
app.listen(port, () => {
    console.log(`Server runing on Port ${port}`);
});
