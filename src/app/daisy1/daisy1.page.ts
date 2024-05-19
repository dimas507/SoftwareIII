import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonMenu 
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-daisy1',
  templateUrl: './daisy1.page.html',
  styleUrls: ['./daisy1.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    RouterLink,
    IonButton,
    IonMenuButton,
    HeaderComponent,
    IonMenu
  ]
})
export class Daisy1Page  {
  constructor() { }
}
