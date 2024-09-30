import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';

@Component({
  selector: 'app-legislation',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './legislation.component.html',
  styleUrl: './legislation.component.scss'
})
export class LegislationComponent {

}
