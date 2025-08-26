import { Component } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";
import { CommonModule } from '@angular/common';

import * as AOS from 'aos';
@Component({
  selector: 'app-projects',
  imports: [PageHeader , CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
 categories: string[] = [
    'All', 'Plumbing', 'Architecture', 'Design', 'Maintenance'
  ];

  selectedCategory: string = 'All';

  posts = [
    {
      image: 'Image/uiux.jpg',
      date: '19 Jan 2023',
      title: 'Discovering Eco-Friendly Solutions for a Your Home',
      excerpt: 'Discover the ultimate guide to troubleshooting smart home issues...',
      tags: ['Plumbing', 'Architecture', 'Maintenance']
    },
    {
      image: 'Image/uiux.jpg',
      date: '22 Jan 2023',
      title: '10 Essential Plumbing Tips for Every Homeowner',
      excerpt: 'Ten valuable plumbing tips that every homeowner should know...',
      tags: ['Plumbing', 'Maintenance', 'Plumbing', 'Maintenance', 'Plumbing', 'Maintenance']
    },
    {
      image: 'Image/uiux.jpg',
      date: '10 Feb 2023',
      title: 'A Step-by-Step Guide to Electrical Safety at Home',
      excerpt: 'Ensure the safety of your family with this comprehensive guide...',
      tags: ['Electrical', 'System', 'Security']
    },
    {
      image: 'Image/uiux.jpg',
      date: '14 Feb 2023',
      title: 'Smart Gardening Tips for Beginners',
      excerpt: 'Transform your backyard into a green paradise with these tips...',
      tags: ['Gardening', 'Design']
    },
    {
      image: 'Image/uiux.jpg',
      date: '25 Feb 2023',
      title: 'Modern Painting Techniques for Your Living Room',
      excerpt: 'Bring new life to your home interior with these techniques...',
      tags: ['Painting', 'Design']
    }
  ];

  filteredPosts = [...this.posts];

  ngOnInit() {
    AOS.init();
  }

  filterPosts(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredPosts = [...this.posts];
    } else {
      this.filteredPosts = this.posts.filter(post => post.tags.includes(category));
    }
  }
}
