import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JWT';
  imagenPathLogo = 'icons/Logo.svg';
  imagenPathFuction = 'image/JWT.gif';
  imagePathIconSegurity = 'icons/verificado.png';
  imagePathIconEscalabilidad = 'icons/flexibilidad.png';
  imagePathIconFelixibilidad = 'icons/escalada.png';
  videoPath = 'video/Desmitificando_los_JWT.mp4';
}
