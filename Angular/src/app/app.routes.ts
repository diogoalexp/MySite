import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormationComponent } from './formation/formation.component';

export const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        title: 'diogoalexp',
        pathMatch: 'full'
    },
    {
        path: 'formation',
        component: FormationComponent,
        title: 'diogoalexp'
    }
];
