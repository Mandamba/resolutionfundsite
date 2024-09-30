import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';

@Component({
  selector: 'app-fund',
  standalone: true,
  imports: [CommonModule, RouterLink, BannerInfoCardComponent],
  templateUrl: './fund.component.html',
  styleUrl: './fund.component.scss'
})
export class FundComponent {

}
