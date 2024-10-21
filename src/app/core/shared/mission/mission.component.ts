import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { CommonModule } from '@angular/common';
import { MissionService } from '../../../services/mission.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [BannerInfoCardComponent, CommonModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {

  missions : any
  constructor(private missionService : MissionService) {

  }
  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.missionService.getMission().subscribe(
      (data) => {
        this.missions = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
