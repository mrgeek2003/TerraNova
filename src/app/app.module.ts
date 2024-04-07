import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddPropComponent } from './components/add-prop/add-prop.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingServiceService } from './service/housing-services/housing-service.service';
import { Routes,RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BuyComponent } from './components/buy/buy.component';
import { RentComponent } from './components/rent/rent.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserServiceService } from './service/user-service.service';
import { TerraBotService } from './service/TerraBot/terra-bot.service';
import { AlertifyService } from './service/alertyfy/alertify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsModule} from 'ngx-bootstrap/tabs'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'buy-property',component:BuyComponent},
  {path:'rent-property',component:RentComponent},
  {path:'about-info',component:AboutComponent},
  {path:'terra-bot',component:ChatComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'service',component:ServicesComponent},
  {path:'list-property',component:AppListComponent},
  {path:'add-property',component:AddPropComponent},
  {path:'property-details/:propertyID',component:PropertyDetailsComponent},
  {path:'**',component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddPropComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PropertyDetailsComponent,
    ServicesComponent,
    BuyComponent,
    RentComponent,
    AppListComponent,
    UserLoginComponent,
    UserRegisterComponent,
    BlogsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    HousingServiceService,
    UserServiceService,
    TerraBotService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
