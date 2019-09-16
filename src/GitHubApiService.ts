import * as request from 'request';
import { User } from './User';
export class GitHubApiService {
    getUserInfo(userName: string){
        let options: any = {
            headers: {
                'User-Agent' : 'request'
            },
            json: true
        }
        request.get('http://api.github.com/users/' + userName, options, (eror: any, response:any, body: any) => {
            let user = new User(body);
            console.log(user);
        })
    }
}