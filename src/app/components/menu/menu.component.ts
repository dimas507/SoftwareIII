import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent,
   IonHeader, 
   IonTitle, 
   IonToolbar, 
   IonButton, 
   IonMenuButton,
   IonMenu,
   IonList,
   IonLabel,
   IonItem
   } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports:[
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    RouterLink,
    IonButton,
    IonMenuButton,
    IonMenu,
    IonContent,
    IonList,
    IonLabel,
    IonItem
  ]
})
export class MenuComponent {

  constructor() { }

}
