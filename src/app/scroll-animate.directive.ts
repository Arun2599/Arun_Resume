import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Initially hide the element - keep background colors intact
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.5s ease-out, transform 0.5s ease-out');

    // Check if element is already in view on load
    this.checkIfInView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.hasAnimated) {
      this.checkIfInView();
    }
  }

  private checkIfInView() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Trigger animation when element is 80% visible
    if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
      this.animateIn();
    }
  }

  private animateIn() {
    this.hasAnimated = true;
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }
}
