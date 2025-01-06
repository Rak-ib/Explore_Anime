import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addAnime',component:AddAnimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
