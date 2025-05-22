import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destaque-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destaque-carousel.component.html',
  styleUrl: './destaque-carousel.component.css'
})
export class DestaqueCarouselComponent {
  allImages: string[] = [];
  currentIndex = 0;

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.allImages.push(`/destaque/${i}.png`);
    }
  }

  get currentImage() {
    return this.allImages[this.currentIndex];
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.allImages.length - 1;
    }
  }

  nextImage() {
    if (this.currentIndex < this.allImages.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}

