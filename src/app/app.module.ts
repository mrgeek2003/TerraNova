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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
