import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import AOS from 'aos'
import { HeaderComponent } from './core/shared/header/header.component';
import { FundComponent } from './core/shared/fund/fund.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { ContactComponent } from './core/shared/contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    RouterLink, HeaderComponent,
    FundComponent,
    FooterComponent,
    ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private router: Router){

 }
 ngOnInit() {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 200
  });
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const fragment = this.router.routerState.snapshot.root.fragment;
      if (event.urlAfterRedirects === '/') {
        document.getElementById('carouselExampleCrossfade')?.scrollIntoView({ behavior: 'smooth' });
      } else if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
}
