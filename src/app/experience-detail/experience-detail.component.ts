import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';

interface Project {
  name: string;
  description: string;
  skills: string[];
  highlights?: string[];
  image: string;
  color: string;
}

interface Experience {
  id: string;
  company: string;
  period: string;
  duration: string;
  role: string;
  icon: string;
  projects: Project[];
}

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ExperienceDetailComponent implements OnInit, OnDestroy {
  experiences: Experience[] = [
    {
      id: 'surfboard',
      company: 'Surfboard Payments',
      period: '2022',
      duration: 'Internship',
      role: 'UI/UX Designer & Frontend Developer',
      icon: '🚀',
      projects: [
        {
          name: 'Skill Development',
          description: 'Designed and developed solutions while honing skills in problem solving, programming fundamentals, design principles, and front-end development.',
          skills: ['UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Problem Solving'],
          highlights: ['Foundation Building', 'Design Fundamentals', 'Frontend Basics'],
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
          color: '#6366f1'
        },
        {
          name: 'Card Memory Game',
          description: 'Designed UI/UX and developed a Card Memory Game from scratch to better understand front-end technologies and user interaction patterns.',
          skills: ['UI/UX Design', 'JavaScript', 'CSS', 'Game Development', 'Firebase Hosting'],
          highlights: ['Interactive UI', 'Game Logic', 'User Engagement'],
          image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&q=80',
          color: '#8b5cf6'
        }
      ]
    },
    {
      id: 'maven',
      company: 'Maven Alpha',
      period: 'Jun - Dec 2022',
      duration: '7 months',
      role: 'UI/UX Designer & Frontend Developer',
      icon: '🎨',
      projects: [
        {
          name: 'Network App',
          description: 'Designed web and mobile UI/UX and developed front-end for the Network app, an employee management dashboard with Firebase backend integration.',
          skills: ['UI/UX Design', 'Angular', 'Mobile Design', 'Firebase DB', 'Figma'],
          highlights: ['Dashboard Design', 'Mobile-First', 'Real-time Data'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
          color: '#ec4899'
        },
        {
          name: 'Design-Development Bridge',
          description: 'Designed and developed components while collaborating with backend team to ensure seamless Firebase integration and deployment.',
          skills: ['UI/UX Design', 'Front-end Development', 'Firebase', 'Design Systems'],
          highlights: ['Team Collaboration', 'Component Library', 'Integration'],
          image: 'https://images.unsplash.com/photo-1522542550221-31fd8575f5a9?w=600&q=80',
          color: '#f472b6'
        }
      ]
    },
    {
      id: 'techcora',
      company: 'Techcora Corporation',
      period: '2023 - Present',
      duration: '2+ years',
      role: 'UI/UX Designer & Full-Stack Developer',
      icon: '💡',
      projects: [
        {
          name: 'Quick Commerce Platform',
          description: 'Built complete quick commerce ecosystem for supermarkets including Chikpuk, Nilgiris, Monthly Mart, and BigSave. Developed consumer app, delivery partner app, and merchant dashboard with real-time tracking.',
          skills: ['UI/UX Design', 'Ionic', 'Angular', 'Firebase', 'Play Store', 'App Store'],
          highlights: ['3 Apps Built', '4 Clients', 'Published on Stores'],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
          color: '#10b981'
        },
        {
          name: 'CoraSuperPos',
          description: 'Designed and developed Point of Sale system for supermarkets with billing, inventory sync, barcode scanning, and sales tracking. Available on mobile and web platforms.',
          skills: ['UI/UX Design', 'Ionic', 'Angular', 'Firebase', 'POS Systems', 'Barcode Integration'],
          highlights: ['POS System', 'Barcode Scanner', 'Real-time Sync'],
          image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80',
          color: '#14b8a6'
        },
        {
          name: 'Innerplay',
          description: 'Mental health and performance app for young athletes. Features psychological assessments, personalized daily activities including box breathing, visualization, affirmations, and progress tracking.',
          skills: ['UI/UX Design', 'React Native', 'Firebase', 'Health & Wellness', 'Personalization'],
          highlights: ['Mental Health', 'Personalized Activities', 'Progress Tracking'],
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
          color: '#8b5cf6'
        },
        {
          name: 'CoraERP',
          description: 'Comprehensive School ERP system with multiple modules including Student, Teacher, Attendance, HR, Bus, Inventory, Employee, Estate Management, Excel import/export, and more. Built with Rust backend.',
          skills: ['UI/UX Design', 'Angular', 'Rust', 'PostgreSQL', 'ERP Systems', 'Data Management'],
          highlights: ['Multi-Module ERP', 'Rust Backend', 'Enterprise Scale'],
          image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
          color: '#f59e0b'
        },
        {
          name: 'Vignesh Homes Website',
          description: 'Designed UI/UX and developed front-end for a construction website displaying ongoing, completed, and upcoming projects with locations. Backend powered by Firebase.',
          skills: ['UI/UX Design', 'Angular', 'Firebase DB', 'Firebase Hosting', 'Responsive Design'],
          highlights: ['Real Estate', 'Project Showcase', 'Location Maps'],
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
          color: '#ef4444'
        },
        {
          name: 'Grace Auto Service ERP',
          description: 'Designed UI/UX and developed front-end for invoice ERP system with simple, intuitive interface. Firebase backend handles data and cloud functions.',
          skills: ['UI/UX Design', 'Angular', 'Firebase DB', 'Firebase Functions', 'ERP Systems'],
          highlights: ['Invoice System', 'Simple UX', 'Cloud Functions'],
          image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
          color: '#3b82f6'
        },
        {
          name: 'Techcora Company Website',
          description: 'Designed and developed company website with colorful aesthetics and GSAP animations. Deployed on Firebase Hosting.',
          skills: ['UI/UX Design', 'Angular', 'GSAP', 'Firebase Hosting', 'Animation'],
          highlights: ['GSAP Animations', 'Brand Identity', 'Modern Design'],
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
          color: '#ec4899'
        },
        {
          name: 'Junior Mastery School ERP',
          description: 'Designed UI/UX and developed ERP showing students marks, attendance, and performance tracking. Firebase handles database and real-time updates.',
          skills: ['UI/UX Design', 'Angular', 'Firebase DB', 'Firebase Functions', 'Data Visualization'],
          highlights: ['Student Analytics', 'Performance Tracking', 'Real-time Updates'],
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
          color: '#6366f1'
        },
        {
          name: 'Church Management App',
          description: 'Designed and developed mobile and web application to connect community through events, prayers, and sharing. Firebase backend for real-time features.',
          skills: ['UI/UX Design', 'Angular', 'Mobile Design', 'Firebase DB', 'Firebase Functions'],
          highlights: ['Community App', 'Events Management', 'Social Features'],
          image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80',
          color: '#a855f7'
        }
      ]
    }
  ];

  currentExperience: Experience | null = null;
  currentProjectIndex = 0;
  isCarouselPaused = false;

  private carouselSubscription: Subscription | null = null;
  private readonly autoCarouselDelay = 2000;

  // Touch handling
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyId = params['id'];
      this.currentExperience = this.experiences.find(exp => exp.id === companyId) || null;

      if (!this.currentExperience) {
        this.router.navigate(['/home']);
        return;
      }

      this.currentProjectIndex = 0;
      this.startAutoCarousel();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoCarousel();
  }

  // Auto-carousel
  private startAutoCarousel(): void {
    this.stopAutoCarousel();

    if (this.totalProjects > 1) {
      this.carouselSubscription = interval(this.autoCarouselDelay).subscribe(() => {
        if (!this.isCarouselPaused) {
          this.nextProject();
        }
      });
    }
  }

  private stopAutoCarousel(): void {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
      this.carouselSubscription = null;
    }
  }

  pauseCarousel(): void {
    this.isCarouselPaused = true;
  }

  resumeCarousel(): void {
    this.isCarouselPaused = false;
  }

  get currentProject(): Project | null {
    if (!this.currentExperience) return null;
    return this.currentExperience.projects[this.currentProjectIndex];
  }

  get totalProjects(): number {
    return this.currentExperience?.projects.length || 0;
  }

  nextProject(): void {
    if (this.currentProjectIndex < this.totalProjects - 1) {
      this.currentProjectIndex++;
    } else {
      this.currentProjectIndex = 0;
    }
  }

  prevProject(): void {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    } else {
      this.currentProjectIndex = this.totalProjects - 1;
    }
  }

  goToProject(index: number): void {
    if (index >= 0 && index < this.totalProjects) {
      this.currentProjectIndex = index;
    }
  }

  goBack(): void {
    this.router.navigate(['/home'], { fragment: 'journey-section' });
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        this.goBack();
        break;
      case 'ArrowRight':
        this.nextProject();
        break;
      case 'ArrowLeft':
        this.prevProject();
        break;
    }
  }

  // Touch/Swipe handling
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextProject();
      } else {
        this.prevProject();
      }
    }
  }

  getTrackOffset(): number {
    const cardWidth = 320;
    const cardGap = 24;
    const totalCardWidth = cardWidth + cardGap;
    return -this.currentProjectIndex * totalCardWidth;
  }
}
