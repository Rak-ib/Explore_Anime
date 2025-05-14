import { Component } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent {
  // Add router to constructor
  constructor(private router: Router) {}

  anime: any = {
    title: '',
    japanese_title: '',
    synopsis: '',
    genres: [],
    release_date: '',
    status: 'Ongoing',
    episodes: 0,
    duration_per_episode: '',
    rating: '',
    studio: '',
    producer: [],
    score: 0,
    popularity_rank: 0,
    cover_image: '',
    trailer_url: '',
    streaming_links: [],
    episodes_list: [],
    characters: [],
    reviews: [],
    related_anime: []
  };

  genresInput = '';
  producersInput = '';
  relatedAnimeInput = '';

  streamingLink = {
    quality: '',
    url: ''
  };

  episode = {
    episode_number: 0,
    title: '',
    aired_date: '',
    thumbnail: '',
    video_url: ''
  };

  character = {
    name: '',
    role: '',
    voice_actor: {
      name: '',
      language: ''
    },
    image: ''
  };

  addStreamingLink() {
    if (this.streamingLink.quality && this.streamingLink.url) {
      this.anime.streaming_links.push({...this.streamingLink});
      this.streamingLink = { quality: '', url: '' };
    }
  }

  removeStreamingLink(link: any) {
    this.anime.streaming_links = this.anime.streaming_links.filter((l: any) => l !== link);
  }

  addEpisode() {
    if (this.episode.episode_number && this.episode.video_url) {
      this.anime.episodes_list.push({...this.episode});
      this.episode = {
        episode_number: 0,
        title: '',
        aired_date: '',
        thumbnail: '',
        video_url: ''
      };
    }
  }

  removeEpisode(ep: any) {
    this.anime.episodes_list = this.anime.episodes_list.filter((e: any) => e !== ep);
  }

  addCharacter() {
    if (this.character.name && this.character.role && this.character.voice_actor.name) {
      this.anime.characters.push({...this.character});
      this.character = {
        name: '',
        role: '',
        voice_actor: {
          name: '',
          language: ''
        },
        image: ''
      };
    }
  }

  removeCharacter(char: any) {
    this.anime.characters = this.anime.characters.filter((c: any) => c !== char);
  }

  async addAnime(form: NgForm) {
    if (form.invalid) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    // Process comma-separated inputs
    if (this.genresInput) {
      this.anime.genres = this.genresInput.split(',').map(g => g.trim()).filter(g => g);
    }
    if (this.producersInput) {
      this.anime.producer = this.producersInput.split(',').map(p => p.trim()).filter(p => p);
    }
    if (this.relatedAnimeInput) {
      this.anime.related_anime = this.relatedAnimeInput.split(',').map(id => id.trim()).filter(id => id);
    }
    const token = localStorage.getItem('authToken');
    console.log('token:', token);

    try {
      const url="https://exploreanimebackend.vercel.app/"
      // const url="http://localhost:3000/"
      const response = await axios.post(`${url}anime`, this.anime, {withCredentials: true, 
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("Anime Added:", response.data);
      alert("Anime added successfully!");
      
      // Reset form
      form.resetForm();
      this.anime = {
        title: '',
        japanese_title: '',
        synopsis: '',
        genres: [],
        release_date: '',
        status: 'Ongoing',
        episodes: 0,
        duration_per_episode: '',
        rating: '',
        studio: '',
        producer: [],
        score: 0,
        popularity_rank: 0,
        cover_image: '',
        trailer_url: '',
        streaming_links: [],
        episodes_list: [],
        characters: [],
        reviews: [],
        related_anime: []
      };
      this.genresInput = '';
      this.producersInput = '';
      this.relatedAnimeInput = '';
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          console.error('Auth error details:', axiosError.response.data);
          // alert('Session expired - please login again');
          // localStorage.removeItem('authToken'); // Changed from 'token' to 'authToken' for consistency
          // this.router.navigate(['/login']);
        } else {
          console.error('Other error:', axiosError);
          alert("Failed to add anime. Please check console for details.");
        }
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  }
}