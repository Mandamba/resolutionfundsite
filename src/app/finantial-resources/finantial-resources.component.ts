import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finantial-resources',
  standalone: true,
  imports: [BannerInfoCardComponent, CommonModule],
  templateUrl: './finantial-resources.component.html',
  styleUrl: './finantial-resources.component.scss'
})
export class FinantialResourcesComponent {

}
