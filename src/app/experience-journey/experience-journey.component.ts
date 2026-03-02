import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Experience {
  id: string;
  company: string;
  period: string;
  duration: string;
  role: string;
  icon: string;
  projectCount: number;
}

@Component({
  selector: 'app-experience-journey',
  templateUrl: './experience-journey.component.html',
  styleUrls: ['./experience-journey.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(40px) scale(0.95)' }),
          stagger(150, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceJourneyComponent {
  constructor(private router: Router) {}

  experiences: Experience[] = [
    {
      id: 'surfboard',
      company: 'Surfboard Payments',
      period: '2022',
      duration: 'Internship',
      role: 'UI/UX Designer & Frontend Developer',
      icon: '🚀',
      projectCount: 2
    },
    {
      id: 'maven',
      company: 'Maven Alpha',
      period: 'Jun - Dec 2022',
      duration: '7 months',
      role: 'UI/UX Designer & Frontend Developer',
      icon: '🎨',
      projectCount: 2
    },
    {
      id: 'techcora',
      company: 'Techcora Corporation',
      period: '2023 - Present',
      duration: '2+ years',
      role: 'UI/UX Designer & Full-Stack Developer',
      icon: '💡',
      projectCount: 9
    }
  ];

  openExperience(experience: Experience): void {
    this.router.navigate(['/experience', experience.id]);
  }
}
