// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AnnounementDetailsComponent } from './announement-details/announement-details.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ParticipantsEntitiesComponent } from './participants-entities/participants-entities.component';
import { LegislationComponent } from './legislation/legislation.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MissionComponent } from './mission/mission.component';
import { OrganicFunctionalityComponent } from './organic-functionality/organic-functionality.component';
import { FinantialResourcesComponent } from './finantial-resources/finantial-resources.component';
import { SupervisionComponent } from './supervision/supervision.component';
import { ReportsAndAccountsComponent } from './reports-and-accounts/reports-and-accounts.component';

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

