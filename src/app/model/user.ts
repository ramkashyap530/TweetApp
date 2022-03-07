export class User {
    getUserDetail(user: any) {
      throw new Error('Method not implemented.');
    }
    firstName!: string;
    lastName!: string;
    userName!: string;
    email!: string;
    password!: string;
    contactNumber!: string;
    confirmPassword!: string;
    userId!:string;

    public get firstName_(){
      return this.firstName;
    }
    public set firstName_(firstName:string){
      this.firstName=firstName;
    }
    public get userName_(){
      return this.userName;
    }
    public set userName_(userName:string){
      this.userName=userName;
    }
    public get password_(){
      return this.password;
    }
    public set password_(password:string){
      this.password=password;
    }
  }
