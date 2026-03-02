import { Component,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../theme.service';

 interface Card {
  imageUrl: string;
  title: string;
  subtitle: string;
  linkUrl: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})

export class HomeComponent {
  isDarkMode$ = this.themeService.darkMode$;
  isCardFlipped = false;

  constructor(private router: Router, public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleFlipCard() {
    this.isCardFlipped = !this.isCardFlipped;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  designProjects : Card[] =  [
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Pet product design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/177974217/Pet-food-online-selling-website'
    },
    {
      imageUrl: './assets/ITcorp.svg',
      title: 'IT Solution design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/178003931/IT-Solution-website'
    },
    {
      imageUrl: './assets/paulkaadu.svg',
      title: 'E-commerce web design',
      subtitle: 'Case study',
      linkUrl: 'https://www.behance.net/gallery/165601725/UI-UX-Case-study-(Online-spices-selling-website)'
    },
    {
      imageUrl: './assets/carservice.svg',
      title: 'car service web design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/168078399/Car-service-booking-website'
    },
    {
      imageUrl: './assets/washly.svg',
      title: 'Laundry app design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/168078801/Laundry-booking-mobile-application'
    },
    {
      imageUrl: './assets/portfolio.svg',
      title: 'Portfolio web design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/177978911/Portfolio-website'
    },
    {
      imageUrl: './assets/interior-design.svg',
      title: 'Interior design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/168080143/Interior-design-company-website'
    },
    {
      imageUrl: './assets/network.svg',
      title: 'Connecting people',
      subtitle: 'Website development',
      linkUrl: '/https://www.behance.net/gallery/165601725/UI-UX-Case-study-(Online-spices-selling-website)'
    },
    
  ];


 
  ngOnInit(): void {
  }

}
