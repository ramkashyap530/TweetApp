import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { PostTweetComponent } from './Tweet/post-tweet/post-tweet.component';
import { ShowAllTweetComponent } from './Tweet/show-all-tweet/show-all-tweet.component';
import { ShowMyTwwetComponent } from './Tweet/show-my-twwet/show-my-twwet.component';
import { TweetMainComponent } from './Tweet/tweet-main/tweet-main.component';
import { ViewAllUsersComponent } from './Tweet/view-all-users/view-all-users.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgetComponent},
  {path:'tweet/posttweet',component:PostTweetComponent},
  {path:'tweet/view-all-user',component:ViewAllUsersComponent},
  {path:'tweet/show-my-tweet',component:ShowMyTwwetComponent},
  {path:'tweet/show-others-tweet',component:ShowAllTweetComponent},
  {path:'tweet-main',component:TweetMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
