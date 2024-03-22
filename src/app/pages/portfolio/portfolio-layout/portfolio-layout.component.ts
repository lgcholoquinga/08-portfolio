import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.scss'
})
export class PortfolioLayoutComponent {}
