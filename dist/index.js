'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8080;
const HOST = '0.0.0.0';
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    response.send("Our TypeScript on Node server is running on localhost.");
});
app.listen(8080, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map