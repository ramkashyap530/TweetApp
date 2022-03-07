import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { TweetServiceService } from 'src/app/service/tweet-service.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {

  tweetText!: string;
  tags!: string;
  tweetId!: string;
  userId!: string;
  isTag: boolean = false;
  postTweet!:FormGroup;
  userName!:string;
  tweet:Tweet=new Tweet();
  constructor(private fb:FormBuilder,private tweetservice: TweetServiceService,private router: Router) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId') ||'';
    this.userName=sessionStorage.getItem('userName')||'';
    this.postTweet = this.fb.group({
      message: ['', Validators.required]
    });
  }


  onSubmit()
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


       var date  = dd.toString()+'/'+mm.toString()+'/'+yyyy.toString();
    //  let date = obj.getFullYear.toString()+','+obj.getMonth.toString()+'-'+obj.getDay.toString();

     this.tweet=Object.assign(this.postTweet.value)

     this.tweet.userId_!=this.userId;
     this.tweet.msgPostTime=date;
     this.tweetservice.postTweet(this.tweet,this.userName).subscribe(data=>
      {
        if(data!=null){
          this.router.navigate(['/tweet-main']);
        }
      });


  }

}
