import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  animeName: string = '';
  animeType: string = '';
  animeTypes: string[] = [
    'Adventure',
    'Drama',
    'Fantasy',
    'Action',
    'Sci-Fi',
    'Suspense',
    'Comedy',
    'Award Winning'
  ];
  
  private searchSubject = new Subject<{ animeName: string; animeType: string }>();

  @Output() searchData = new EventEmitter<{ animeName: string; animeType: string }>();

  constructor() {
    // Emit search data after a delay
    this.searchSubject.pipe(debounceTime(500)).subscribe((data) => {
      this.searchData.emit(data);
    });
  }

  setAnime(event: any) {
    this.animeName = event.target.value;
    this.emitSearchData();
  }

  setType(event: any) {
    this.animeType = event.target.value;
    this.emitSearchData();
  }

  emitSearchData() {
    this.searchSubject.next({ animeName: this.animeName, animeType: this.animeType });
  }
}
