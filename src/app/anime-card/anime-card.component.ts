// anime-card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent {
  @Input() anime: any;

  constructor(private router: Router) {}

  viewDetails() {
    if (!this.anime?._id) return;
    
    // Handle both cases: _id as string or { $oid: string }
    const id = typeof this.anime._id === 'string' 
      ? this.anime._id 
      : this.anime._id.$oid;
      
    this.router.navigate(['/anime', id]);
  }

  get genres(): string[] {
    return Array.isArray(this.anime?.genres) ? this.anime.genres : [];
  }
}