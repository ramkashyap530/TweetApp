import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../model/tweet';
import { TweetReply } from '../model/tweetReply';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  applicationUrl="http://3.139.44.90:8080/TweetApplication/api/v1.0/tweets";
  constructor(private httpClient:HttpClient) {
  }
  public postTweet(tweet: any,userName:any){
    return this.httpClient.post<Tweet>(this.applicationUrl+"/"+userName+"/add",tweet);
  }

  public postReply(reply: any,userName:any){
    return this.httpClient.post<Tweet>(this.applicationUrl+"/"+userName+"/reply",reply);
  }
  public getTweet(userName:any){
    return this.httpClient.get<Tweet[]>(this.applicationUrl+"/all/"+userName);
  }
  public addLike(tweet: any,tweetId:any){
    return this.httpClient.put<Tweet>(this.applicationUrl+"/update/"+tweetId,tweet);
  }

  public getReply(tweetId:any){
    return this.httpClient.get<TweetReply[]>(this.applicationUrl+"/getReply/"+tweetId);
  }
  public getAllTweets(){
    return this.httpClient.get<Tweet[]>(this.applicationUrl+"/all/");
  }
  public deleteTweet(tweetId:String){
    return this.httpClient.delete(this.applicationUrl+"/delete/"+tweetId);
  }
  public updateTweet(tweet: any,tweetId:any){
    return this.httpClient.put<Tweet>(this.applicationUrl+"/update/"+tweetId,tweet);
  }
}
