import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrl: './add-anime.component.css'
})
export class AddAnimeComponent {

  anime = {
    anime_name: '',
    image_link: '',
    category: '',
    description: '',
    readMore_link: ''
  };

  addAnime(form: any) {
    if (form.invalid) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    console.log(this.anime, "Adding Anime...");

    // Simulating API request (Uncomment for real API)
    // axios.post('https://your-api-endpoint.com/anime', this.anime)
    //   .then(response => {
    //     alert('Anime added successfully!');
    //     console.log(response.data);
    //     form.reset(); // Reset form after submission
    //   })
    //   .catch(error => {
    //     alert('Error adding anime');
    //     console.error(error);
    //   });

    form.reset(); // Reset form fields after clicking ADD button
  }
}
