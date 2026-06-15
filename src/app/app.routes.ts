import { Routes } from '@angular/router';
import { Frontpage } from './frontpage/frontpage';
import { Loginpage } from './loginpage/loginpage';

export const routes: Routes = [
    {path:"",component:Frontpage},
    {path:"login",component:Loginpage}
];
