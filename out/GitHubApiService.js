"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName, cb) {
        var options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
        request.get('http://api.github.com/users/' + userName, options, function (eror, response, body) {
            var user = new User_1.User(body);
            console.log(user);
            cb(user);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
