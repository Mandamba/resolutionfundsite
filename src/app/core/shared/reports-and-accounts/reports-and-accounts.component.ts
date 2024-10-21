import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';

@Component({
  selector: 'app-reports-and-accounts',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './reports-and-accounts.component.html',
  styleUrl: './reports-and-accounts.component.scss'
})
export class ReportsAndAccountsComponent {

}
