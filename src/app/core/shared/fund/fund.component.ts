import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { FundService } from '../../../services/fund.service';

@Component({
  selector: 'app-fund',
  standalone: true,
  imports: [CommonModule, RouterLink, BannerInfoCardComponent],
  templateUrl: './fund.component.html',
  styleUrl: './fund.component.scss'
})
export class FundComponent {

  funds : any
  constructor(private fundService : FundService) {

  }


  ngOnInit() {
    this.getAll();
  }


  public getAll() {
    this.fundService.getFund().subscribe(
      (data) => {
        this.funds = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
