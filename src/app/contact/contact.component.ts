import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sectionTitle: string = `Let’s Stay Connected`;
  sectionTitleText: string = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`;
  contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'contact@example.com',
    address: '123 Main St, Anytown, USA'
  };

  submitForm() {
    alert('Form submitted!');
  }
}
