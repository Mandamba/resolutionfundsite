import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { CommonModule } from '@angular/common';
import { OrganicFunctionalityService } from '../../../services/organic-functionality.service';

@Component({
  selector: 'app-organic-functionality',
  standalone: true,
  imports: [BannerInfoCardComponent, CommonModule],
  templateUrl: './organic-functionality.component.html',
  styleUrl: './organic-functionality.component.scss'
})
export class OrganicFunctionalityComponent {
  organicFunctionality : any
  constructor(private organicService : OrganicFunctionalityService) {

  }
  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.organicService.getOrganicFunctionality().subscribe(
      (data) => {
        this.organicFunctionality = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
