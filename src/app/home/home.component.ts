import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Declare variables to store form data and fetched results
  formData = {
    page: '1',
    size: '10',
    title: '',
  };

  animeData: any = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  // Method to fetch anime data based on the form input
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
      },
      headers: {
        'x-rapidapi-key': '8f232cd195mshd5ca5617b364c78p199eebjsnd82e01e7039a',
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.animeData = response.data.data;
      console.log(this.animeData)
      this.loading = false;
    } catch (error) {
      this.error = 'Error fetching data';
      this.loading = false;
    }
  }
}
