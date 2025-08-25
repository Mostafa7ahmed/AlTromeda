import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testmonial',
  imports: [CommonModule],
  templateUrl: './testmonial.html',
  styleUrl: './testmonial.scss'
})
export class Testmonial {
  testimonials = [
    {
      name: 'Ernest Smith',
      role: 'Developer at Unixity',
      quote:
        'Outstanding dedication to excellence, exceptional support received. Impressive service!',
      image: 'Image/avatar-3-150x150.webp'
    },
    {
      name: 'Stella Smith',
      role: 'Engineer at Unify',
      quote:
        'Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.',
      image: 'Image/avatar-3-150x150.webp'
    },
    {
      name: 'Thomas Smith',
      role: 'Designer at Converta',
      quote:
        'I highly recommend this agency. Testing for our project was done everything top-notch',
      image: 'Image/avatar-3-150x150.webp'
    },
      {
      name: 'Ernest Smith',
      role: 'Developer at Unixity',
      quote:
        'Outstanding dedication to excellence, exceptional support received. Impressive service!',
      image: 'Image/avatar-3-150x150.webp'
    },
 
  ];

}
