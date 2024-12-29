import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  animeName:string=""
  animeType:string=""
  setAnime(event:any){
    this.animeName=event.target.value;
    console.log(this.animeName)
    console.log(this.animeType)

  }

}
