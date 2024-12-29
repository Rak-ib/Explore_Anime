import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formData = {
    page: '1',
    size: '100',
    title: '',
    type: ''
  };

  animeData: any = [];
  loading: boolean = false;
  error: string | null = null;

  private isCooldown: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.fetchAnimeData()
  }


  async fetchAnimeData(): Promise<void> {
    this.loading = true;
    this.error = null;

    const options = {
      method: 'GET',
      url: 'https://anime-db.p.rapidapi.com/anime',
      params: {
        page: this.formData.page,
        size: this.formData.size,
        search: this.formData.title,
        genres: this.formData.type
      },
      headers: {
        'x-rapidapi-key': '8f232cd195mshd5ca5617b364c78p199eebjsnd82e01e7039a',
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log('API Response:', response.data);
      this.animeData = response.data.data;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.error = 'Error fetching data';
      this.loading = false;
    }
  }

  
  handleSearchData(event: { animeName: string; animeType: string }): void {
    console.log('Received search data in HomeComponent:', event);
    this.formData.title = event.animeName;
    this.formData.type = event.animeType;
    this.fetchAnimeData();
  }
}
