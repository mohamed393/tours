import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { MangetourComponent } from './mangetour/mangetour.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TourService } from './services/tour.service';
import { OnetourComponent } from './onetour/onetour.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    NewaccountComponent,
    MangetourComponent,
    OnetourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowHidePasswordModule,
    NgbModule,
    CustomFormsModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
      , { path: 'login', component: LoginComponent }
      , { path: 'newaccount', component: NewaccountComponent }
      , { path: 'admin/manage', component: MangetourComponent }
      , { path: 'onetour/:id', component: OnetourComponent }
    ])

  ],
  providers: [UserService, AuthService, TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
