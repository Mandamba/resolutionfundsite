import { Component, OnInit } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { CommonModule } from '@angular/common';
import { FinancialResourcesService } from '../../../services/financial-resources.service';

@Component({
  selector: 'app-finantial-resources',
  standalone: true,
  imports: [BannerInfoCardComponent, CommonModule],
  templateUrl: './finantial-resources.component.html',
  styleUrls: ['./finantial-resources.component.scss']
})
export class FinantialResourcesComponent implements OnInit {
  financialResources: any;

  constructor(private financialResourcesService: FinancialResourcesService) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.financialResourcesService.getFinancialResources().subscribe(
      (data) => {
        this.financialResources = data;
      },
      (error) => {
        console.error('Erro ao obter recursos financeiros:', error);
      }
    );
  }
}
