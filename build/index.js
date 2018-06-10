"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_get_local_stylesheet_paths_1 = require("vamtiger-get-local-stylesheet-paths");
const vamtiger_get_stylesheet_paths_1 = require("vamtiger-get-stylesheet-paths");
function getRemoteStylesheetPaths(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const html = params.html;
        const stylesheetPaths = vamtiger_get_stylesheet_paths_1.default({ html });
        const localStylesheetPaths = yield vamtiger_get_local_stylesheet_paths_1.default({ html });
        const remoteStylesheetPaths = stylesheetPaths
            .filter(stylesheetPath => !localStylesheetPaths.some(localStylesheetPath => stylesheetPath === localStylesheetPath));
        return remoteStylesheetPaths;
    });
}
exports.default = getRemoteStylesheetPaths;
//# sourceMappingURL=index.js.map