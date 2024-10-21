import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { SuperVisionService } from '../../../services/supervision-service';

@Component({
  selector: 'app-supervision',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './supervision.component.html',
  styleUrl: './supervision.component.scss'
})
export class SupervisionComponent {
supervision : any
  constructor(private supervisionService : SuperVisionService) {

  }
  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.supervisionService.getSupervisions().subscribe(
      (data) => {
        this.supervision = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
