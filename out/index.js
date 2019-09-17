"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var svc = new GitHubApiService_1.GitHubApiService;
if (process.argv.length < 3) {
    console.log('Please pass the username as an argument.');
}
else {
    var username_1 = process.argv[2];
    svc.getUserInfo(username_1, function (user) {
        svc.getRepos(username_1, function (repos) {
            user.repos = repos;
            console.log(user);
        });
    });
}
