import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';

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
        title: 'diogoalexp - formation'
    },
    {
        path: 'experience',
        component: ExperienceComponent,
        title: 'diogoalexp - experience'
    },
    {
        path: 'certification',
        component: CertificationComponent,
        title: 'diogoalexp - certification'
    }
];
