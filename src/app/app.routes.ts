import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'main',
  //Se carga en diferido el coponente que se va a utilizar
  //La carga diferida es la práctica de evitar que las imágenes y otros activos de tu 
  //página web se carguen hasta que el usuario no los necesite. 
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'daisy1',
    loadComponent: () => import('./daisy1/daisy1.page').then( m => m.Daisy1Page)
  },
];
