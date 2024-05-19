import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import{
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonButtons,
  IonMenuButton,

  IonLabel
} from '@ionic/angular/standalone';
import { MenuVisibilityService } from 'src/app/services/menu-visibility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[
    CommonModule,
    IonicModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonLabel,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideMenuButton: boolean = false;

  constructor(private menuVisibilityService: MenuVisibilityService) {}

  ngOnInit() {
    this.menuVisibilityService.hideMenu$.subscribe(hide => {
      this.hideMenuButton = hide;
    });
  }
}
