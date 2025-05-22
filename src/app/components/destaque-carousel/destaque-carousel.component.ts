import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destaque-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destaque-carousel.component.html',
  styleUrls: ['./destaque-carousel.component.css']
})
export class DestaqueCarouselComponent {
  allImages: string[] = [];
  currentIndex = 0;

  
  slideDirection: 'left' | 'right' = 'right';

  
  isAnimating = false;

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.allImages.push(`/destaque/${i}.png`);
    }
  }

  prevImage() {
    if (this.isAnimating) return; 

    this.slideDirection = 'left';
    this.isAnimating = true;

    setTimeout(() => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.allImages.length - 1;
      }
      this.isAnimating = false;
    }, 800); 
  }

  nextImage() {
    if (this.isAnimating) return; 

    this.slideDirection = 'right';
    this.isAnimating = true;

    setTimeout(() => {
      if (this.currentIndex < this.allImages.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.isAnimating = false;
    }, 800);
  }
}
