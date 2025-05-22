import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './../../components/footer/footer.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DestaqueCarouselComponent } from '../../components/destaque-carousel/destaque-carousel.component';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeaderComponent, DestaqueCarouselComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
