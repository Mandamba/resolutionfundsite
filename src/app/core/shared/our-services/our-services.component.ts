import { Component } from '@angular/core';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { CommonModule } from '@angular/common';
import { MissionComponent } from '../mission/mission.component';
import { SupervisionComponent } from '../supervision/supervision.component';
import { ParticipantsEntitiesComponent } from '../participants-entities/participants-entities.component';
import { ReportsAndAccountsComponent } from '../reports-and-accounts/reports-and-accounts.component';
import { FinantialResourcesComponent } from '../finantial-resources/finantial-resources.component';
import { OrganicFunctionalityComponent } from '../organic-functionality/organic-functionality.component';
import { RouterLink } from '@angular/router';
import { OurServicesService } from '../../../services/our-services.service';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent,RouterLink,
    MissionComponent,SupervisionComponent, ParticipantsEntitiesComponent,
    ReportsAndAccountsComponent, FinantialResourcesComponent, OrganicFunctionalityComponent
  ],
templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

  ourServices : any
  constructor(private ourServicesService : OurServicesService) {}

  ngOnInit() {
    this.getAll();
  }

  services = [
    {
      iconWidth: 32,
      iconHeight: 32,
      iconPath: 'M18.6746 0.26779C10.0637 -1.33065...',
      title: 'Refreshing Design',
      description: 'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
    },
    {
      iconWidth: 39,
      iconHeight: 22,
      iconPath: 'M19.5004 0C14.6345 0 11.4767 2.14015...',
      title: 'Custom Solutions',
      description: 'Our expert team provides custom solutions tailored to your business needs.'
    },
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public getAll() {
    this.ourServicesService.getOurServices().subscribe(
      (data) => {
        this.ourServices = data;
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
