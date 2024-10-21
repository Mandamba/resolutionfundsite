import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { AnnounementDetailsComponent } from '../announement-details/announement-details.component';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnouncementsService } from '../../../services/announcements.service';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,
    AnnounementDetailsComponent, BannerInfoCardComponent, HttpClientModule ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AnnouncementComponent {
  anouncementList : any[] = []
  date : Date = new Date()
  isLoading = false;
  selectedAnnouncement: any = null;
  announcements = [
    { id: 1, date : this.date.getDate(), title: 'Chichen Itza', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicu' },
    { id: 2,date : this.date.getDate(), title: 'Colosseum Roma', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicula lectus, vel bibendum mauris cursus ac. Phasellus luctus purus id lacus vehicula, et consectetur dolor aliquam. Pellentesque tempus, ligula in tincidunt feugiat, metus sapien fringilla ante, eget congue mi augue sit amet sem. Ut id pharetra mi. Aliquam erat volutpat.Nulla ut venenatis nisi. Nullam quis pharetra orci, vitae sollicitudin ex. Mauris condimentum sem non urna malesuada feugiat. Sed tristique orci sit amet orci pretium dapibus. Suspendisse potenti. In lobortis faucibus arcu non ornare. In at erat nec risus facilisis finibus id id libero. Vivamus vestibulum venenatis ex in ultricies. Sed fringilla efficitur magna, nec ullamcorper purus ultricies ut. Fusce gravida, sem quis tempus pharetra, leo ante venenatis eros, sed viverra metus quam eu metus. Proin eu lectus bibendum, vulputate arcu ut, viverra velit. Aliquam id sem non ante accumsan venenatis. Mauris auctor risus vel purus dignissim varius. Etiam ullamcorper magna eu tincidunt lobortis.' },
    { id: 3,date : this.date.getDate(), title: 'Grande Pirâmide de Gizé', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicula lectus, vel bibendum mauris cursus ac. Phasellus luctus purus id lacus vehicula, et consectetur dolor aliquam. Pellentesque tempus, ligula in tincidunt feugiat, metus sapien fringilla ante, eget congue mi augue sit amet sem. Ut id pharetra mi. Aliquam erat volutpat.Nulla ut venenatis nisi. Nullam quis pharetra orci, vitae sollicitudin ex. Mauris condimentum sem non urna malesuada feugiat. Sed tristique orci sit amet orci pretium dapibus. Suspendisse potenti. In lobortis faucibus arcu non ornare. In at erat nec risus facilisis finibus id id libero. Vivamus vestibulum venenatis ex in ultricies. Sed fringilla efficitur magna, nec ullamcorper purus ultricies ut. Fusce gravida, sem quis tempus pharetra, leo ante venenatis eros, sed viverra metus quam eu metus. Proin eu lectus bibendum, vulputate arcu ut, viverra velit. Aliquam id sem non ante accumsan venenatis. Mauris auctor risus vel purus dignissim varius. Etiam ullamcorper magna eu tincidunt lobortis.' },
    { id: 4,date : this.date.getDate(), title: 'São Francisco', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicula lectus, vel bibendum mauris cursus ac. Phasellus luctus purus id lacus vehicula, et consectetur dolor aliquam. Pellentesque tempus, ligula in tincidunt feugiat, metus sapien fringilla ante, eget congue mi augue sit amet sem. Ut id pharetra mi. Aliquam erat volutpat.Nulla ut venenatis nisi. Nullam quis pharetra orci, vitae sollicitudin ex. Mauris condimentum sem non urna malesuada feugiat. Sed tristique orci sit amet orci pretium dapibus. Suspendisse potenti. In lobortis faucibus arcu non ornare. In at erat nec risus facilisis finibus id id libero. Vivamus vestibulum venenatis ex in ultricies. Sed fringilla efficitur magna, nec ullamcorper purus ultricies ut. Fusce gravida, sem quis tempus pharetra, leo ante venenatis eros, sed viverra metus quam eu metus. Proin eu lectus bibendum, vulputate arcu ut, viverra velit. Aliquam id sem non ante accumsan venenatis. Mauris auctor risus vel purus dignissim varius. Etiam ullamcorper magna eu tincidunt lobortis.' },
    { id: 4,date : this.date.getDate(), title: 'São Francisco', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicula lectus, vel bibendum mauris cursus ac. Phasellus luctus purus id lacus vehicula, et consectetur dolor aliquam. Pellentesque tempus, ligula in tincidunt feugiat, metus sapien fringilla ante, eget congue mi augue sit amet sem. Ut id pharetra mi. Aliquam erat volutpat.Nulla ut venenatis nisi. Nullam quis pharetra orci, vitae sollicitudin ex. Mauris condimentum sem non urna malesuada feugiat. Sed tristique orci sit amet orci pretium dapibus. Suspendisse potenti. In lobortis faucibus arcu non ornare. In at erat nec risus facilisis finibus id id libero. Vivamus vestibulum venenatis ex in ultricies. Sed fringilla efficitur magna, nec ullamcorper purus ultricies ut. Fusce gravida, sem quis tempus pharetra, leo ante venenatis eros, sed viverra metus quam eu metus. Proin eu lectus bibendum, vulputate arcu ut, viverra velit. Aliquam id sem non ante accumsan venenatis. Mauris auctor risus vel purus dignissim varius. Etiam ullamcorper magna eu tincidunt lobortis.' },
    { id: 5,date : this.date.getDate(), title: 'São Francisco', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicula lectus, vel bibendum mauris cursus ac. Phasellus luctus purus id lacus vehicula, et consectetur dolor aliquam. Pellentesque tempus, ligula in tincidunt feugiat, metus sapien fringilla ante, eget congue mi augue sit amet sem. Ut id pharetra mi. Aliquam erat volutpat.Nulla ut venenatis nisi. Nullam quis pharetra orci, vitae sollicitudin ex. Mauris condimentum sem non urna malesuada feugiat. Sed tristique orci sit amet orci pretium dapibus. Suspendisse potenti. In lobortis faucibus arcu non ornare. In at erat nec risus facilisis finibus id id libero. Vivamus vestibulum venenatis ex in ultricies. Sed fringilla efficitur magna, nec ullamcorper purus ultricies ut. Fusce gravida, sem quis tempus pharetra, leo ante venenatis eros, sed viverra metus quam eu metus. Proin eu lectus bibendum, vulputate arcu ut, viverra velit. Aliquam id sem non ante accumsan venenatis. Mauris auctor risus vel purus dignissim varius. Etiam ullamcorper magna eu tincidunt lobortis.' },
    { id: 6,date : this.date.getDate(), title: 'São Francisco', subtitle: 'SUBTÍTULO', imageUrl: 'https://www.giranoticias.com/_midias/jpg/2023/11/08/900x506/1_bna_regulamento-349021.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien ac magna vestibulum accumsan sed ut leo. Suspendisse in interdum ipsum. Cras condimentum felis sit amet est facilisis, eget consequat risus luctus. Etiam sit amet turpis sed orci commodo laoreet vel in tortor. Proin scelerisque mi nec turpis porttitor, nec tincidunt turpis vehicula. Integer eget lacus vel elit facilisis accumsan. Aenean bibendum, nisi vel laoreet posuere, libero augue ullamcorper velit, ut elementum est urna sed turpis. Donec luctus, sapien id cursus fermentum, ante purus convallis nisi, in malesuada leo eros ac elit. Nam posuere volutpat mauris, ut fermentum justo tristique ut.Suspendisse potenti. Vivamus sit amet leo et urna malesuada dictum non nec tortor. Proin consectetur erat nec ligula ultrices, quis vulputate sem viverra. Donec in dignissim lorem. Etiam vehicula risus ac leo consequat vestibulum. Phasellus elementum justo at erat rhoncus dignissim. Aenean vehicula, odio eget dictum efficitur, mi nulla ultrices lorem, a dictum nisl nisl ac arcu. Integer consectetur vehicula lectus, vel bibendum mauris cursus ac. Phasellus luctus purus id lacus vehicula, et consectetur dolor aliquam. Pellentesque tempus, ligula in tincidunt feugiat, metus sapien fringilla ante, eget congue mi augue sit amet sem. Ut id pharetra mi. Aliquam erat volutpat.Nulla ut venenatis nisi. Nullam quis pharetra orci, vitae sollicitudin ex. Mauris condimentum sem non urna malesuada feugiat. Sed tristique orci sit amet orci pretium dapibus. Suspendisse potenti. In lobortis faucibus arcu non ornare. In at erat nec risus facilisis finibus id id libero. Vivamus vestibulum venenatis ex in ultricies. Sed fringilla efficitur magna, nec ullamcorper purus ultricies ut. Fusce gravida, sem quis tempus pharetra, leo ante venenatis eros, sed viverra metus quam eu metus. Proin eu lectus bibendum, vulputate arcu ut, viverra velit. Aliquam id sem non ante accumsan venenatis. Mauris auctor risus vel purus dignissim varius. Etiam ullamcorper magna eu tincidunt lobortis.' },
  ];

  constructor(private router : Router, private service : AnnouncementsService){

  }
  ngOnInit(): void {
    this.loadItems()
    this.loadAnnouncements();
    this.loadRecentAnnouncements();
  }

  displayedAnnouncements : any = [];
  recentannouncements : any = [];
  itemsPerPage = 3;
  currentPage = 0;

  showFullDescription1 = false;
  showFullDescription2 = false;
  showFullDescription3 = false;
  showFullDescription4 = false;

  toggleDescription(cardNumber: number): void {
    switch(cardNumber) {
      case 1:
        this.showFullDescription1 = !this.showFullDescription1;
        break;
      case 2:
        this.showFullDescription2 = !this.showFullDescription2;
        break;
      case 3:
        this.showFullDescription3 = !this.showFullDescription3;
        break;
      case 4:
        this.showFullDescription4 = !this.showFullDescription4;
        break;
    }
  }
  loadAnnouncements(): void {
    this.isLoading = true;
    setTimeout(() => {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;

      const newannouncements = this.announcements.slice(start, end);
      this.displayedAnnouncements = [
        ...this.displayedAnnouncements,
        ...newannouncements
      ];

      this.currentPage++;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }, 500);
  }

  viewDetails(announcement: any): void {
    this.selectedAnnouncement = announcement
    this.router.navigate(['/announcement-details'], { state: { announcement } });
  }

  loadRecentAnnouncements(): void {
    this.recentannouncements = this.announcements.slice(-3).reverse();
  }

  showLess(): void {
   this.isLoading = false;
    const start = (this.currentPage - 2) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedAnnouncements = this.announcements.slice(0, end);
    this.currentPage--;
  }

  showList(): void {
    this.router.navigate([], { fragment: 'announcements' });
    this.selectedAnnouncement = null;
  }
  loadMore(): void {
    this.loadAnnouncements();
  }
  loadItems(): void {
    this.service.getAnnouncements().subscribe({
      next: (data) => {
        this.anouncementList = data.value;
      },
      error: (err) => {
        //this.error = 'Erro ao carregar itens';
        //this.loading = false;
      }
    });
  }
}
