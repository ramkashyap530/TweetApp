import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetReply } from 'src/app/model/tweetReply';
import { User } from 'src/app/model/user';
import { TweetServiceService } from 'src/app/service/tweet-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-show-all-tweet',
  templateUrl: './show-all-tweet.component.html',
  styleUrls: ['./show-all-tweet.component.css']
})
export class ShowAllTweetComponent {

  searchForm!: FormGroup;
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
  // likedtweetId!: string;
  isTag: boolean = false;
  tweetId!: string;
  replyformvalid: boolean = false;
  userId!: string;
    unitId!: string;
  alreadyLiked:boolean=false;

  count: number = 0;

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      userName: ['']
    })
    this.replyForm = this.fb.group({
      message: ['']
    })
    this.replyformvalid = false;
    this.userId = sessionStorage.getItem('userName') || '';
    this.user.userName = this.userId;

    this.tweetservice.getAllTweets().subscribe(data => {
      this.tweets = data.slice();
    });
  }
  search() {
    if (this.searchForm.valid) {
      this.user = Object.assign(this.searchForm.value)
      this.tweetservice.getTweet(this.user.userName).subscribe(data => { this.tweets = data }
      );
    }
  }
  onSubmit(tweetId: string) {
    if (this.replyForm.valid) {
      this.tweetReply = Object.assign(this.replyForm.value);
      this.replyformvalid = !this.replyformvalid;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      var date = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
      this.tweetReply.msgPostTime = date;
      this.tweetReply.tweetId = tweetId;
      this.tweetReply.userName=this.user.userName;

      this.tweetservice.postReply(this.tweetReply, this.user.userName).subscribe(data => { console.log("Replied successfully") }
      )
      this.replyformvalid = false;
    }
  }
  like(likedtweet: Tweet) {
    console.log(likedtweet);
    this.alreadyLiked=true;
   this.tweetId = likedtweet.tweetId;
    this.count = likedtweet.like + 1;
    likedtweet.like = this.count;
    this.tweetservice.addLike(likedtweet, this.tweetId).subscribe(data => {
      alert("liked successfully");
    });
  }
  viewReply(tweetReply:Tweet){
    this.expand = !this.expand;
   this.unitId = tweetReply.tweetId;
    this.tweetservice.getReply(tweetReply.tweetId).subscribe(data =>
     {
       this.replies = data.slice();

       console.log("This replies"+data);
     })
    //  for(let i=0;i<this.replies.length;i++)
    //  {
    //      this.rTweetId = this.replies[0].tweetId;

    //  }
  }
  addReply(id: string)
 {
  this.unitId = id;
  this.replyformvalid = !this.replyformvalid;
 }

}
