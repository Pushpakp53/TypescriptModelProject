"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var svc = new GitHubApiService_1.GitHubApiService;
svc.getUserInfo('Pushpakp53', function (user) {
    console.log(user);
});
svc.getRepos('Pushpakp53', function (repos) {
    console.log(repos);
});
