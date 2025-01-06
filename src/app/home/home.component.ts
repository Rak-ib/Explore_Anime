import { Component, OnInit } from '@angular/core';
import appClient from '../services/axios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animeData: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  formData = {
    anime_name: '',
    category: '',
    page: 1
  };

  ngOnInit(): void {
    this.loadAnimes();
  }

  async loadAnimes() {
    this.loading = true;
    this.error = null;

    try {
      const response = await appClient.get('', {
        params: {
          anime_name: this.formData.anime_name,
          category: this.formData.category,
          page: this.formData.page
        }
      });
      this.animeData = response.data.data;
      console.log('Fetched data:', this.animeData);
    } catch (error) {
      console.error('Error loading data:', error);
      this.error = 'Error fetching data';
    } finally {
      this.loading = false;
    }
  }

  handleSearchData(event: { animeName: string; animeType: string }): void {
    this.formData.anime_name = event.animeName;
    this.formData.category = event.animeType;
    this.formData.page = 1; 
    this.loadAnimes();
  }
}
