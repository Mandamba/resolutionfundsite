import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';

@Component({
  selector: 'app-data-protection',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {

}
