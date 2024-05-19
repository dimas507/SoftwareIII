//main.page.ts
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton
 } from '@ionic/angular/standalone';
//importación automatica
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MenuVisibilityService } from '../services/menu-visibility.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
    RouterLink,
    HeaderComponent
    ]
})
export class MainPage  {
    constructor(private menuVisibilityService: MenuVisibilityService) {}
  }
