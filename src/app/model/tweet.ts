export class Tweet{
    tweetId!: string;
    userId!: string;
    userName!:string;
    msgPostTime!: string;
    message!: string;
    like!: number;

    public get userId_(){
        return this.userId;
      }
    public set userId_(userId:string){
        this.userId=userId;
      }
      public get userName_(){
        return this.userName;
      }
    public set userName_(userName:string){
        this.userName=userName;
      }
}
