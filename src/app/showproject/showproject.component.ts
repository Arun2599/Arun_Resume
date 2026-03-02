import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface Card {
  imageUrl: string;
  title: string;
  subtitle: string;
  linkUrl: string;
}

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css'],
})
export class ShowprojectComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;
  @Input() sectionTitle!: string;
  @Input() cards: Card[] = [];

  // Duplicated cards for infinite scroll
  duplicatedCards: Card[] = [];
  isPaused = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Duplicate cards for seamless infinite scroll
    this.duplicatedCards = [...this.cards, ...this.cards];
  }

  pauseAnimation(): void {
    this.isPaused = true;
  }

  resumeAnimation(): void {
    this.isPaused = false;
  }
}
