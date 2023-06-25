import { Routes } from '@angular/router';
import { FaqComponent } from 'src/app/faq/faq.component';
import { ProfileComponent } from '../common/profile/profile.component';
import { DashboardComponent } from './dashboard.component';



export const DashboardRoutes: Routes = [

    { path: 'profile', component: ProfileComponent },
    { path: 'faq', component: FaqComponent },



];
