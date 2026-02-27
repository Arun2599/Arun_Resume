import { Component } from '@angular/core';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skillspage.component.html',
  styleUrls: ['./skillspage.component.css']
})
export class SkillspageComponent {
  skills = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered digital experiences that delight users and drive business goals.',
      icon: '🎨',
      tags: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
      size: 'large'
    },
    {
      title: 'Mobile Development',
      description: 'Building cross-platform apps for iOS and Android with native performance.',
      icon: '📱',
      tags: ['React Native', 'Ionic', 'Firebase'],
      size: 'medium'
    },
    {
      title: 'Web Development',
      description: 'Crafting responsive, performant web applications with modern frameworks.',
      icon: '🌐',
      tags: ['Angular', 'TypeScript', 'HTML/CSS'],
      size: 'medium'
    },
    {
      title: 'Backend Development',
      description: 'Building scalable APIs and server-side logic.',
      icon: '⚙️',
      tags: ['Rust', 'Firebase Functions'],
      size: 'small'
    },
    {
      title: 'Full-Stack Products',
      description: 'End-to-end product development from design to deployment.',
      icon: '🚀',
      tags: ['ERP Systems', 'E-commerce', 'POS'],
      size: 'small'
    }
  ];
}
