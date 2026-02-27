import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      role: 'Product Manager',
      company: 'Techcora Corporation',
      avatar: 'RK',
      content: 'Arun delivered exceptional work on our School ERP system. His attention to detail in both design and development is remarkable. The final product exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'Maven Alpha',
      avatar: 'PS',
      content: 'Working with Arun was a game-changer for our employee management dashboard. He understood our vision perfectly and brought it to life with clean, intuitive interfaces.',
      rating: 5
    },
    {
      name: 'Vikram Menon',
      role: 'CTO',
      company: 'QuickMart Solutions',
      avatar: 'VM',
      content: 'Arun built our entire quick commerce platform from scratch. His full-stack expertise and design sensibility made the development process seamless. Highly recommended!',
      rating: 5
    },
    {
      name: 'Deepa Nair',
      role: 'CEO',
      company: 'HealthFirst Apps',
      avatar: 'DN',
      content: 'The mental health app Arun designed for us has received outstanding user feedback. His understanding of user psychology and clean UI patterns made all the difference.',
      rating: 5
    }
  ];

  currentIndex = 0;

  get visibleTestimonials(): Testimonial[] {
    return this.testimonials;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentIndex = this.currentIndex === 0
      ? this.testimonials.length - 1
      : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
