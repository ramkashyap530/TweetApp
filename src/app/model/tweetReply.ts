export class TweetReply{
    tweetId!: string;
    msgPostTime!: string;
    message!: string;
    userName!:String;
    public get tweetId_(){
        return this.tweetId;
      }
      public set tweetId_(tweetId:string){
        this.tweetId=tweetId;
      }
}
