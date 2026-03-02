import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Experience {
  company: string;
  period: string;
  role: string;
  icon: string;
  projects: Project[];
  isExpanded?: boolean;
}

interface Project {
  name: string;
  description: string;
  skills: string[];
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
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('400ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(80, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceJourneyComponent {
  experiences: Experience[] = [
    {
      company: 'Surfboard Payments',
      period: 'Internship',
      role: 'UI/UX Designer & Frontend Developer',
      icon: '🚀',
      isExpanded: false,
      projects: [
        {
          name: 'Skill Development',
          description: 'Designed and developed solutions while honing skills in problem solving, programming fundamentals, design principles, and front-end development.',
          skills: ['UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Problem Solving']
        },
        {
          name: 'Card Memory Game',
          description: 'Designed UI/UX and developed a Card Memory Game from scratch to better understand front-end technologies and user interaction patterns.',
          skills: ['UI/UX Design', 'JavaScript', 'CSS', 'Game Development', 'Firebase Hosting']
        }
      ]
    },
    {
      company: 'Maven Alpha',
      period: 'Jun 2022 - Dec 2022',
      role: 'UI/UX Designer & Frontend Developer',
      icon: '🎨',
      isExpanded: false,
      projects: [
        {
          name: 'Network App',
          description: 'Designed web and mobile UI/UX and developed front-end for the Network app, an employee management dashboard with Firebase backend integration.',
          skills: ['UI/UX Design', 'Angular', 'Mobile Design', 'Firebase DB', 'Figma']
        },
        {
          name: 'Design-Development Bridge',
          description: 'Designed and developed components while collaborating with backend team to ensure seamless Firebase integration and deployment.',
          skills: ['UI/UX Design', 'Front-end Development', 'Firebase', 'Design Systems']
        }
      ]
    },
    {
      company: 'Techcora Corporation',
      period: 'Present',
      role: 'UI/UX Designer & Full-Stack Developer',
      icon: '💡',
      isExpanded: false,
      projects: [
        {
          name: 'Quick Commerce Platform',
          description: 'Built complete quick commerce ecosystem for supermarkets including Chikpuk, Nilgiris, Monthly Mart, and BigSave. Developed consumer app, delivery partner app, and merchant dashboard with real-time tracking.',
          skills: ['UI/UX Design', 'Ionic', 'Angular', 'Firebase', 'Play Store', 'App Store']
        },
        {
          name: 'CoraSuperPos',
          description: 'Designed and developed Point of Sale system for supermarkets with billing, inventory sync, barcode scanning, and sales tracking. Available on mobile and web platforms.',
          skills: ['UI/UX Design', 'Ionic', 'Angular', 'Firebase', 'POS Systems', 'Barcode Integration']
        },
        {
          name: 'Innerplay',
          description: 'Mental health and performance app for young athletes. Features psychological assessments, personalized daily activities including box breathing, visualization, affirmations, and progress tracking.',
          skills: ['UI/UX Design', 'React Native', 'Firebase', 'Health & Wellness', 'Personalization']
        },
        {
          name: 'CoraERP',
          description: 'Comprehensive School ERP system with multiple modules including Student, Teacher, Attendance, HR, Bus, Inventory, Employee, Estate Management, Excel import/export, and more. Built with Rust backend.',
          skills: ['UI/UX Design', 'Angular', 'Rust', 'PostgreSQL', 'ERP Systems', 'Data Management']
        },
        {
          name: 'Vignesh Homes Website',
          description: 'Designed UI/UX and developed front-end for a construction website displaying ongoing, completed, and upcoming projects with locations. Backend powered by Firebase.',
          skills: ['UI/UX Design', 'Angular', 'Firebase DB', 'Firebase Hosting', 'Responsive Design']
        },
        {
          name: 'Grace Auto Service ERP',
          description: 'Designed UI/UX and developed front-end for invoice ERP system with simple, intuitive interface. Firebase backend handles data and cloud functions.',
          skills: ['UI/UX Design', 'Angular', 'Firebase DB', 'Firebase Functions', 'ERP Systems']
        },
        {
          name: 'Techcora Company Website',
          description: 'Designed and developed company website with colorful aesthetics and GSAP animations. Deployed on Firebase Hosting.',
          skills: ['UI/UX Design', 'Angular', 'GSAP', 'Firebase Hosting', 'Animation']
        },
        {
          name: 'Junior Mastery School ERP',
          description: 'Designed UI/UX and developed ERP showing students marks, attendance, and performance tracking. Firebase handles database and real-time updates.',
          skills: ['UI/UX Design', 'Angular', 'Firebase DB', 'Firebase Functions', 'Data Visualization']
        },
        {
          name: 'Church Management App',
          description: 'Designed and developed mobile and web application to connect community through events, prayers, and sharing. Firebase backend for real-time features.',
          skills: ['UI/UX Design', 'Angular', 'Mobile Design', 'Firebase DB', 'Firebase Functions']
        }
      ]
    }
  ];

  toggleExpand(experience: Experience): void {
    experience.isExpanded = !experience.isExpanded;
  }
}
