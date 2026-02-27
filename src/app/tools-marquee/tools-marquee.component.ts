import { Component } from '@angular/core';

interface Tool {
  name: string;
  icon: string;
  category: 'design' | 'frontend' | 'backend' | 'mobile' | 'tools';
}

@Component({
  selector: 'app-tools-marquee',
  templateUrl: './tools-marquee.component.html',
  styleUrls: ['./tools-marquee.component.css']
})
export class ToolsMarqueeComponent {
  tools: Tool[] = [
    // Design Tools
    { name: 'Figma', icon: '🎨', category: 'design' },
    { name: 'Framer', icon: '✨', category: 'design' },
    { name: 'Adobe XD', icon: '💎', category: 'design' },

    // Frontend
    { name: 'Angular', icon: '🅰️', category: 'frontend' },
    { name: 'TypeScript', icon: '📘', category: 'frontend' },
    { name: 'HTML5', icon: '🌐', category: 'frontend' },
    { name: 'CSS3', icon: '🎭', category: 'frontend' },
    { name: 'GSAP', icon: '⚡', category: 'frontend' },

    // Mobile
    { name: 'React Native', icon: '📱', category: 'mobile' },
    { name: 'Ionic', icon: '🔋', category: 'mobile' },

    // Backend
    { name: 'Rust', icon: '🦀', category: 'backend' },
    { name: 'Firebase', icon: '🔥', category: 'backend' },
    { name: 'Firestore', icon: '💾', category: 'backend' },

    // Tools
    { name: 'Git', icon: '📂', category: 'tools' },
    { name: 'VS Code', icon: '💻', category: 'tools' },
    { name: 'Postman', icon: '📬', category: 'tools' }
  ];

  // Duplicate tools for seamless infinite scroll
  get duplicatedTools(): Tool[] {
    return [...this.tools, ...this.tools];
  }
}
