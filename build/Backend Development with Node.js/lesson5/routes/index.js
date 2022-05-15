"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students_1 = __importDefault(require("./api/students"));
const teachers_1 = __importDefault(require("./api/teachers"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('main API ...');
});
router.use('/students', students_1.default);
router.use('/teachers', teachers_1.default);
exports.default = router;
