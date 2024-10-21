import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';

@Component({
  selector: 'app-participants-entities',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './participants-entities.component.html',
  styleUrl: './participants-entities.component.scss'
})
export class ParticipantsEntitiesComponent {}
