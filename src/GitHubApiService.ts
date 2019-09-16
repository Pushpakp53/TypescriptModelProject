import * as request from 'request';
import { User } from './User';

const OPTIONS: any = {
    headers: {
        'User-Agent' : 'request'
    },
    json: true
}

export class GitHubApiService {
    getUserInfo(userName: string, cb : (user: User)=> any){
        
        request.get('http://api.github.com/users/' + userName, OPTIONS, (eror: any, response:any, body: any) => {
            let user = new User(body);
            console.log(user);
            cb(user);
        })
    }

    getRepos(userName: string, cb : (user: User)=> any){
        request.get('http://api.github.com/users/' + userName + '/repos', OPTIONS, (eror: any, response:any, body: any) => {
            let user = new User(body);
            console.log(user);
            cb(user);
    }
}