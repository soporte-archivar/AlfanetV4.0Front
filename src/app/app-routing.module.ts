import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginFormComponent } from './loginForm/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'inicio', component: LandingPageComponent},
  {path: 'login', component: LoginFormComponent},

  
  //Enlace MENU GENEROS
//   {path: 'generos', component:IndiceGenerosComponent},
//   {path: 'generos/crear', component:CrearGeneroComponent},
//   {path: 'generos/editar/:id', component:EditarGeneroComponent},
// //Enlace MENU ACTORES
//   {path: 'actores', component:IndiceActoresComponent},
//   {path: 'actores/crear', component:CrearActorComponent},
//   {path: 'actores/editar/:id', component:EditarActorComponent},
// //Enlace MENU CINES
//   {path: 'cine', component:IndiceCinesComponent},
//   {path: 'cine/crear', component:CrearCineComponent},
//   {path: 'cine/editar/:id', component:EditarCineComponent},
//   //Enlace MENU peliculas
//   {path: 'peliculas/crear', component:CrearPeliculaComponent},
//   {path: 'peliculas/editar/:id', component:EditarPeliculasComponent},
//   {path: 'peliculas/buscar', component:FiltroPeliculasComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
