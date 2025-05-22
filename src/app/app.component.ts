import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestaqueCarouselComponent } from './components/destaque-carousel/destaque-carousel.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, DestaqueCarouselComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-teste';
}
