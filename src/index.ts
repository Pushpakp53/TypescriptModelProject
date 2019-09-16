import {GitHubApiService} from './GitHubApiService';
import { User } from './User';

let svc = new GitHubApiService;
svc.getUserInfo('Pushpakp53', (user: User) => {
    console.log(user);
});
