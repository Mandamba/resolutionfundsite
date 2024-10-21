import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterService } from '../../../services/footer.service';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  currentYear: number = new Date().getFullYear();
  footer : any
  contact : any
  @ViewChild('footer') footerElement!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private footerService : FooterService,
    private contactService : ContactService
  ) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.checkAndApplyAnimation();
    this.getFooterData();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkAndApplyAnimation();
  }
  redirectToExternalUrl(url : string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private checkAndApplyAnimation() {
    if (this.footerElement && this.footerElement.nativeElement) {
      this.applyAnimation();
    } else {
      console.error('Footer element not found or not initialized');
    }
  }

  private applyAnimation() {
    const footer = this.footerElement.nativeElement;

    if (footer instanceof HTMLElement) {
      try {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight) {
          footer.classList.remove('opacity-0', 'translate-y-10');
          footer.classList.add('opacity-100', 'translate-y-0');
        }
      } catch (error) {
        console.error('Error applying animation:', error);
      }
    } else {
      console.error('Footer element is not an instance of HTMLElement');
    }
  }

  public getFooterData() {
    this.footerService.getFooter().subscribe(
      (data) => {
        this.footer = data;
      },
      (error) => {
        console.error('Erro ao obter recursos financeiros:', error);
      }
    );
  }
  public getContactData() {
    this.contactService.getContact().subscribe(
      (data) => {
        this.footer = data;
      },
      (error) => {
        console.error('Erro ao obter recursos financeiros:', error);
      }
    );
  }
}
