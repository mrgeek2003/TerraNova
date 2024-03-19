import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddPropComponent } from './components/add-prop/add-prop.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingServiceService } from './service/housing-service.service';
import { Routes,RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'buy-property',component:AppListComponent},
  {path:'rent-property',component:AppListComponent},
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
    AppListComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PropertyDetailsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
