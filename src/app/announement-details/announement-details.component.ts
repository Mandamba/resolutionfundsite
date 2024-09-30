import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BannerInfoCardComponent } from '../banner-info-card/banner-info-card.component';

@Component({
  selector: 'app-announement-details',
  standalone: true,
  imports: [CommonModule, BannerInfoCardComponent],
  templateUrl: './announement-details.component.html',
  styleUrl: './announement-details.component.scss'
})
export class AnnounementDetailsComponent {
  @Input() announcement: any;
  @Input() isLoading: boolean = false;
  isModalVisible: boolean = false;
  isReadMore: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.announcement = navigation.extras.state['announcement'];
      this.isLoading = false;
    }
  }
  toggleReadMore() {
    this.isReadMore = !this.isReadMore;
  }


  // Dados do formulário
  email: string = '';
  message: string = '';

  showModal(): void {
    this.isModalVisible = true;
  }

  hideModal(): void {
    this.isModalVisible = false;
  }

  submitForm(): void {
    // Lógica para lidar com o envio do formulário
    console.log('Email:', this.email);
    console.log('Mensagem:', this.message);
    this.hideModal(); // Fechar o modal após o envio
  }
}
