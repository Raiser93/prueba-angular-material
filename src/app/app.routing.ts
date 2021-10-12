import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    }
]