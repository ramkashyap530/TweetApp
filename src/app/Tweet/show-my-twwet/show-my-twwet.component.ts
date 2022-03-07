import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetReply } from 'src/app/model/tweetReply';
import { User } from 'src/app/model/user';
import { TweetServiceService } from 'src/app/service/tweet-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-show-my-twwet',
  templateUrl: './show-my-twwet.component.html',
  styleUrls: ['./show-my-twwet.component.css']
})
export class ShowMyTwwetComponent implements OnInit {
  editForm!: FormGroup;
  replyForm!: FormGroup;
  constructor(private userService: UserServiceService, private router: Router
    , private tweetservice: TweetServiceService, private fb: FormBuilder) { }
  user: User = new User();
  tweet: Tweet = new Tweet();
  tweetReply: TweetReply = new TweetReply();
  expand: boolean = false;
  tweets: Tweet[] = [];
  replies: TweetReply[] = [];
  isViewReply: boolean = false;
  tweetId!: string;
  editformvalid: boolean = false;
  userId!: string;
  unitId!: string;
  alreadyLiked: boolean = false;
  count: number = 0;

  ngOnInit(): void {

    this.editForm = this.fb.group({
      message: ['', Validators.required]
    });
    this.replyForm = this.fb.group({
      message: ['']
    })
    this.editformvalid = false;
    this.userId = sessionStorage.getItem('userName') || '';
    this.user.userName = this.userId;

    this.tweetservice.getTweet(this.user.userName).subscribe(data => {
      this.tweets = data.slice();
    });
  }

  like(likedtweet: Tweet) {
    console.log(likedtweet);
    this.alreadyLiked = true;
    this.tweetId = likedtweet.tweetId;
    this.count = likedtweet.like + 1;
    likedtweet.like = this.count;
    this.tweetservice.addLike(likedtweet, this.tweetId).subscribe(data => {
      alert("liked successfully");
    });
  }
  viewReply(tweetReply: Tweet) {
    this.expand = !this.expand;
    this.unitId = tweetReply.tweetId;
    this.tweetservice.getReply(tweetReply.tweetId).subscribe(data => {
      this.replies = data.slice();

      console.log("This replies" + data);
    })
  }
  delete(tweetId: string) {
    this.tweetservice.deleteTweet(tweetId).subscribe(data => {
        this.ngOnInit();
    })
  }
  onSubmit(tweet: Tweet) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    var date = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
    //  let date = obj.getFullYear.toString()+','+obj.getMonth.toString()+'-'+obj.getDay.toString();

    this.tweet = Object.assign(this.editForm.value)

    this.tweet.userName = tweet.userName;
    console.log(this.tweet.userId);
    this.tweet.msgPostTime = date;
    this.tweetservice.updateTweet(this.tweet, tweet.tweetId).subscribe(data => {
      if (data != null) {
        this.tweet.message = data.message;
        this.tweet.msgPostTime = data.msgPostTime;
        this.editformvalid = false;
        this.ngOnInit();
      }

    })
  }

  editTweet(tweet: Tweet) {
    this.unitId = tweet.tweetId;
    this.editformvalid = !this.editformvalid;
    this.editForm.controls['message'].setValue(tweet.message);
  }
}
