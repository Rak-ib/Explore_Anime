import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // Define the anime object to hold form data
  newUser = {
    user_name:'',
    user_email:'',
    user_password:''
  };

  // Function to send a POST request
  login(form:any) {
    if (form.invalid) {
      alert("Please fill all required fields before submitting.");
      return;
    }
    console.log(this.newUser, "Sending data...");

    // axios.post('https://your-api-endpoint.com/anime', this.user)
    //   .then(response => {
    //     alert('Anime added successfully!');
    //     console.log(response.data);

    //     // Reset the form after submission
    //     this.user = {
    //       identifier: '',
    //       password: ''
    //     };
    //   })
    //   .catch(error => {
    //     alert('Error adding anime');
    //     console.error(error);
    //   });
    form.reset()
  }
}
