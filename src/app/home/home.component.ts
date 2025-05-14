import { Component, OnInit } from '@angular/core';
import appClient from '../services/axios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  animeData: any[] = [];
  loading: boolean = false;
  error: string | null = null;
  popularAnime: any[] = [];
  trendingAnime: any[] = [];

  formData = {
    anime_name: '',
    category: '',
    page: 1
  };

  ngOnInit(): void {
    this.loadAnimes();
    this.checkAuthStatus();
    this.loadPopularAnime();
    this.loadTrendingAnime();
  }

  checkAuthStatus() {
    const token = document.cookie.includes('authToken');
    this.isLoggedIn = token;
  }

  async loadAnimes() {
    this.loading = true;
    this.error = null;

    try {
      const response = await appClient.get('/', {
        params: {
          title: this.formData.anime_name,
          genre: this.formData.category,
          page: this.formData.page
        }
      });
      this.animeData = response.data.data;
    } catch (error) {
      console.error('Error loading data:', error);
      this.error = 'Error fetching data';
    } finally {
      this.loading = false;
    }
  }

  async loadPopularAnime() {
    try {
      const response = await appClient.get('/anime/popular');
      this.popularAnime = response.data.data.slice(0, 8);
    } catch (error) {
      console.error('Error loading popular anime:', error);
    }
  }

  async loadTrendingAnime() {
    try {
      const response = await appClient.get('/anime/trending');
      this.trendingAnime = response.data.data.slice(0, 8);
    } catch (error) {
      console.error('Error loading trending anime:', error);
    }
  }

  handleSearchData(event: { animeName: string; animeType: string }): void {
    this.formData.anime_name = event.animeName;
    this.formData.category = event.animeType;
    this.formData.page = 1; 
    this.loadAnimes();
  }
}