import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organic-functionality',
  standalone: true,
  imports: [BannerInfoCardComponent, CommonModule],
  templateUrl: './organic-functionality.component.html',
  styleUrl: './organic-functionality.component.scss'
})
export class OrganicFunctionalityComponent {

}
