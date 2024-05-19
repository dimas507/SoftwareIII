import { Component } from '@angular/core';
import { IonApp,
   IonRouterOutlet,
  } from '@ionic/angular/standalone';
import { MenuComponent } from './components/menu/menu.component';
//import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    MenuComponent
    //HeaderComponent
  ],
})
export class AppComponent {
  constructor() {}
}
