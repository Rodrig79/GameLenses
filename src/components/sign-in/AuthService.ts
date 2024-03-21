export class AuthService {
    public async login(username: string, password: string):Promise<Object | undefined>{
        return{
            user: "abc"
        }
    }

    public getUserName(){
        return "some user"
    }
}