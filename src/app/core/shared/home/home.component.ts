import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContactComponent } from '../contact/contact.component';
import { FundComponent } from "../fund/fund.component";
import { AnnouncementComponent } from '../announcements/announcements.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { FrequentQuestionComponent } from '../frequent-question/frequent-question.component';
import { BannerComponent } from '../banner/banner.component';
import { DataProtectionComponent } from '../data-protection/data-protection.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { SecondaryBannerComponent } from '../secondary-banner/secondary-banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ContactComponent, RouterOutlet, FundComponent, AnnouncementComponent,
    OurServicesComponent, FrequentQuestionComponent, BannerComponent, DataProtectionComponent,
  MainBannerComponent, SecondaryBannerComponent]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private isBrowser: boolean;
  private routerSubscription: any;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initializeCarousel();

      this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        setTimeout(() => {
          this.initializeCarousel();
        }, 0);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private async initializeCarousel(): Promise<void> {
    if (this.isBrowser) {
      try {
        const { initTWE, Carousel } = await import('tw-elements');
        initTWE({ Carousel });

        const carouselElement = document.querySelector('#carouselExampleCrossfade') as HTMLElement;
        if (carouselElement) {
          const carousel = new Carousel(carouselElement);
          carousel.to(0);
          carousel.start();
        }
      } catch (error) {
      }
    }
  }
}
