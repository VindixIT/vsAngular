//import { Role } from './role';

export class User {
  //role!: Role;
  private email: string;
  private password: string;
  
  constructor(email:string, password:string){
    this.email = email;
    this.password = password;
  }
  getEmail():string{
    return this.email
  }
  
  getPassword():string{
    return this.password
  }
}
