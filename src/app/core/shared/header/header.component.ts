import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  stickyMenu: boolean = false;
  navigationOpen: boolean = false;
  dropdown: boolean = false;
  darkMode: boolean = false;
  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveLink();
    });
  }

  isActive(route: string): boolean {
    return this.activeLink === route;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.stickyMenu = scrollPosition > 20;
  }

  toggleNavigation() {
    this.navigationOpen = !this.navigationOpen;
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  updateActiveLink() {
    this.activeLink = this.router.url;
  }
  navigateTo(route: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.navigationOpen = false;
    this.router.navigate([route]);
  }
}
