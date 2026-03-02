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
      name: 'Rajesh Kumar',
      role: 'Product Manager',
      company: 'Techcora Corporation',
      avatar: 'RK',
      content: 'Arun delivered exceptional work on our School ERP system. His attention to detail in both design and development is remarkable. The final product exceeded our expectations.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    {
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'Maven Alpha',
      avatar: 'PS',
      content: 'Working with Arun was a game-changer for our employee management dashboard. He understood our vision perfectly and brought it to life with clean, intuitive interfaces.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #ec4899, #f472b6)'
    },
    {
      name: 'Vikram Menon',
      role: 'CTO',
      company: 'QuickMart Solutions',
      avatar: 'VM',
      content: 'Arun built our entire quick commerce platform from scratch. His full-stack expertise and design sensibility made the development process seamless. Highly recommended!',
      rating: 5,
      gradient: 'linear-gradient(135deg, #10b981, #14b8a6)'
    },
    {
      name: 'Deepa Nair',
      role: 'CEO',
      company: 'HealthFirst Apps',
      avatar: 'DN',
      content: 'The mental health app Arun designed for us has received outstanding user feedback. His understanding of user psychology and clean UI patterns made all the difference.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)'
    },
    {
      name: 'Suresh Iyer',
      role: 'Director',
      company: 'Vignesh Homes',
      avatar: 'SI',
      content: 'Our construction website looks absolutely stunning. Arun captured our brand perfectly with modern design and smooth animations. Clients love the project showcase feature.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #ef4444, #f87171)'
    },
    {
      name: 'Ananya Reddy',
      role: 'Operations Head',
      company: 'Grace Auto Service',
      avatar: 'AR',
      content: 'The invoice ERP system Arun developed streamlined our entire billing process. Simple, intuitive, and exactly what we needed. Our team picked it up in no time.',
      rating: 5,
      gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)'
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
