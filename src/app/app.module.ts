import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './home/search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { HttpClientModule } from '@angular/common/http';
// import { AnimeDetailComponent } from '../app/home/anime-detail-component/anime-detail-component.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { CommonModule } from '@angular/common';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AddAnimeComponent,
    AnimeDetailComponent,
    AnimeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
