import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-info-card.component.html',
  styleUrl: './banner-info-card.component.scss'
})
export class BannerInfoCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() backgroundImage: string = '';


  bannerStyle: any;

  ngOnInit() {
    this.bannerStyle = this.getBannerStyle();
  }
  getBannerStyle() {
    if (this.backgroundImage) {
      return {
        'background-image': `url(${this.backgroundImage})`,
        'background-size': 'cover',
        'background-position': 'center'
      };
    } else {
      return {
        'background-color': '#245e7b;',
        'background-size': 'cover',
        'background-position': 'center'
      };
    }
  }
}
