import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfoComponent } from './pages/info/info.component';





@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
