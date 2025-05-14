// anime-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import appClient from '../services/axios.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  anime: any = null;
  loading: boolean = false;
  error: string | null = null;
  activeTab: string = 'overview';

  constructor(private route: ActivatedRoute) {}

  currentEpisode: number | null = null;

  playEpisode(episode: any) {
    this.currentEpisode = episode.episode_number;
  }
  ngOnInit(): void {
    this.loadAnimeDetails();
  }

  async loadAnimeDetails() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    
    try {
      const url="https://explore-anime-backend-tatd.vercel.app/"
      // const url="http://localhost:3000/"
      const response = await appClient.get(`${url}anime/${id}`);
      this.anime = response.data;
      console.log("okaaaaaaaaay", response.data)
    } catch (error) {
      console.error('Error loading anime details:', error);
      this.error = 'Failed to load anime details';
    } finally {
      this.loading = false;
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}