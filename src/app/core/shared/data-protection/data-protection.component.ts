import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { DataProtectionService } from '../../../services/data-protection.service';

@Component({
  selector: 'app-data-protection',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {

  dataProtection : any[] = []
  constructor(private dataProtectionService : DataProtectionService ) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.dataProtectionService.getDataProtection().subscribe(
      (data) => {
        this.dataProtection = data;
        console.log('Dados de proteção obtidos:', this.dataProtection);
      },
      (error) => {
        console.error('Erro ao obter dados de proteção:', error);
      }
    );
  }
}
