import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.gard';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
// import { AnimeDetailComponent } from '../app/home/anime-detail-component/anime-detail-component.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addAnime',component:AddAnimeComponent, canActivate: [AuthGuard] },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'anime/:id', component: AnimeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
