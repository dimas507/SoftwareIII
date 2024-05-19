// menu-visibility.service.ts
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuVisibilityService {
  private hideMenuSubject = new BehaviorSubject<boolean>(false);
  hideMenu$ = this.hideMenuSubject.asObservable();

  // Lista de rutas donde el menú debe estar oculto
  private hiddenMenuRoutes: string[] = ['/home',];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    });
  }

  private checkRoute() {
    const currentRoute = this.router.url;
    const shouldHideMenu = this.hiddenMenuRoutes.includes(currentRoute);
    console.log(`Current route: ${currentRoute}, Hide menu: ${shouldHideMenu}`);
    this.hideMenuSubject.next(shouldHideMenu);
  }
}
