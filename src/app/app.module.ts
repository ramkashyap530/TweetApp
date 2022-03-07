import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateEqualModule } from 'ng-validate-equal';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './Tweet/user-profile/user-profile.component';
import { TweetMainComponent } from './Tweet/tweet-main/tweet-main.component';
import { PostTweetComponent } from './Tweet/post-tweet/post-tweet.component';
import { ViewAllUsersComponent } from './Tweet/view-all-users/view-all-users.component';
import { ShowMyTwwetComponent } from './Tweet/show-my-twwet/show-my-twwet.component';
import { ShowAllTweetComponent } from './Tweet/show-all-tweet/show-all-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ForgetComponent,
    RegisterComponent,
    UserProfileComponent,
    TweetMainComponent,
    PostTweetComponent,
    ViewAllUsersComponent,
    ShowMyTwwetComponent,
    ShowAllTweetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ValidateEqualModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
