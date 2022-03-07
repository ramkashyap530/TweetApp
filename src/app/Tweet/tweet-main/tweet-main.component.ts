import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-main',
  templateUrl: './tweet-main.component.html',
  styleUrls: ['./tweet-main.component.css']
})
export class TweetMainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openFeed()
  {
    this.router.navigate(['tweet/feed']);
  }
  openPostTweet()
  {
    this.router.navigate(['tweet/posttweet']);
  }
  openViewAllUsers()
  {
    this.router.navigate(['tweet/view-all-user']);
  }
  openYourTweets()
  {
    this.router.navigate(['tweet/show-my-tweet']);
  }
  openOtherUserTweets()
  {
    this.router.navigate(['tweet/show-others-tweet']);
  }


}
