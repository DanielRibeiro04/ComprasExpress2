import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'cadastro', component:CadastroComponent},
    {path:'facebook', component:ErrorComponent},
    {path:'linkdin', component:ErrorComponent},
    {path:'youtube', component:ErrorComponent},
    {path:'instagram', component:ErrorComponent},
];
