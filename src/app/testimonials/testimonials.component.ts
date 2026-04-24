import { Component, OnInit } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  gradient: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'Abilpaul',
      role: 'Team Lead',
      company: 'Techcora Corporation',
      avatar: 'AP',
      content: 'Arun is easy to work with. He asks the right questions before starting and keeps things simple. The UI he builds always feels clean and the team finds it easy to use.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    {
      name: 'Gnana Mani',
      role: 'Founder',
      company: 'Innerplay',
      avatar: 'GM',
      content: 'Arun understood our idea quickly and gave it a real look and feel. The app is smooth and users actually enjoy it. He also updates changes fast whenever we ask.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #ec4899, #f472b6)'
    },
    {
      name: 'Chidambaram',
      role: 'Business Owner',
      company: 'Quick Commerce Platform & POS',
      avatar: 'CH',
      content: 'He built our delivery app and POS from start to finish. My staff learned it in one day. Orders, billing and reports all in one place. Very happy with the work.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #10b981, #14b8a6)'
    },
    {
      name: 'Vignesh',
      role: 'Founder',
      company: 'Vignesh Homes',
      avatar: 'VG',
      content: 'Our website came out exactly how I wanted. Simple, neat and shows our projects well. Many customers tell us they found us through the site. Thanks Arun.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #ef4444, #f87171)'
    }
  ];

  // Duplicated for infinite scroll
  duplicatedTestimonials: Testimonial[] = [];
  isPaused = false;

  ngOnInit(): void {
    // Duplicate testimonials for seamless infinite scroll
    this.duplicatedTestimonials = [...this.testimonials, ...this.testimonials];
  }

  pauseAnimation(): void {
    this.isPaused = true;
  }

  resumeAnimation(): void {
    this.isPaused = false;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
