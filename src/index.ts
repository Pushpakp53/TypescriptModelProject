import {GitHubApiService} from './GitHubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GitHubApiService;
svc.getUserInfo('Pushpakp53', (user: User) => {
    console.log(user);
});

svc.getRepos('Pushpakp53', (repos: Repo[]) => {
    console.log(repos);
});
