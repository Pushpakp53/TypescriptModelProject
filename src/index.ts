import {GitHubApiService} from './GitHubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GitHubApiService;
if (process.argv.length < 3){
    console.log('Please pass the username as an argument.')
}
else{
    let username = process.argv[2];
svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
     user.repos = repos;
     console.log(user);
    });
});

}
