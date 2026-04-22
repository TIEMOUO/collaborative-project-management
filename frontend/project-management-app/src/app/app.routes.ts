import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './layout/auth-layout/layout';
import { Inscription } from './pages/inscription/inscription';
import { Dashbord } from './pages/dashbord/dashbord';

export const routes: Routes = [
    {path:'',
        component: Layout,
        children:[
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {path: '', component: Login},
            {path: 'register', component: Inscription},
            {path: 'login', component: Login},
            {path: 'dashboard', component: Dashbord}

            
        ]
    },
    
];
