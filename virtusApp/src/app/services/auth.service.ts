import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';
import { Router } from '@angular/router';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';


@Injectable()
export class AuthService {

  private readonly fakeUser = new User('aria@gmail.com','1234'); 
  isAuthenticated = false;
 


  constructor(private router: Router) {}
  //private user!: User;
  //isAuthorized() {
    //    return !!this.user;
    //}
  authenticate(user:User):boolean{
    if(this.checkCredentials(user)){
      this.isAuthenticated = true;
      this.router.navigate(['/welcome'])
      return true;
    }
    this.isAuthenticated = false;
    return false;
    }
    private checkCredentials(user:User):boolean{
      return this.checkEmail(user.getEmail()) && this.checkPassword(user.getPassword());
    }

    private checkEmail(email:String):boolean{
      return email === this.fakeUser.getEmail();
    }
    private checkPassword(password:String):boolean{
      return password === this.fakeUser.getPassword();
    }

    //hasRole(role: Role) {
      //  return this.isAuthorized() && this.user.role === role;
    //}
    //login(role: Role) {
      //this.user = { role: role };
    //}
    logout() {
      this.isAuthenticated = false;
      this.router.navigate(['/login']);
      
    }
}






//OLD AUTH
// why do you need defining window as any?
// check this: https://github.com/aws/aws-amplify/issues/678#issuecomment-389106098
/*(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'Z4PI5tEZwNNRneNUMtejIlK6jccgyH2O',
    domain: 'dev-r3usqe3y.us.auth0.com',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid'
  });

  accessToken!: String;
  expiresAt!: Number;

  constructor(public router: Router) {}

  public welcome(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.expiresIn) {
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        this.router.navigate(['/ciclo']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = '';
    this.expiresAt = 0;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
  }
} */
