import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { LegislationService } from '../../../services/legislation.service';

@Component({
  selector: 'app-legislation',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './legislation.component.html',
  styleUrl: './legislation.component.scss'
})
export class LegislationComponent {

  legislations : any
  constructor(private legislation : LegislationService) {

  }
  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.legislation.getLegislation().subscribe(
      (data) => {
        this.legislations = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
