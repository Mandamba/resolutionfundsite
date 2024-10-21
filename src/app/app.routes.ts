// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './core/shared/home/home.component';
import { ContactComponent } from './core/shared/contact/contact.component';
import { AnnounementDetailsComponent } from './core/shared/announement-details/announement-details.component';
import { MainBannerComponent } from './core/shared/main-banner/main-banner.component';
import { DataProtectionComponent } from './core/shared/data-protection/data-protection.component';
import { ParticipantsEntitiesComponent } from './core/shared/participants-entities/participants-entities.component';
import { LegislationComponent } from './core/shared/legislation/legislation.component';
import { MissionComponent } from './core/shared/mission/mission.component';
import { OrganicFunctionalityComponent } from './core/shared/organic-functionality/organic-functionality.component';
import { FinantialResourcesComponent } from './core/shared/finantial-resources/finantial-resources.component';
import { SupervisionComponent } from './core/shared/supervision/supervision.component';
import { ReportsAndAccountsComponent } from './core/shared/reports-and-accounts/reports-and-accounts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'announcement-details', component: AnnounementDetailsComponent },
      { path: 'main-banner', component: MainBannerComponent },
    ]
  },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'participants-entities', component: ParticipantsEntitiesComponent },
  { path: 'applicable-lagislation', component: LegislationComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'organic-and-functionality', component: OrganicFunctionalityComponent },
  { path: 'participants', component: ParticipantsEntitiesComponent },
  { path: 'finantial-resourecs', component: FinantialResourcesComponent },
  { path: 'supervision', component: SupervisionComponent },
  { path: 'report-and-account', component: ReportsAndAccountsComponent },
  { path: '**', redirectTo: '' }
];

