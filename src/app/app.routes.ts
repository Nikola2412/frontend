import { Routes } from '@angular/router';
import { Frontpage } from './frontpage/frontpage';
import { Loginpage } from './loginpage/loginpage';
import { Searchpage } from './searchpage/searchpage';
import { Resultpage } from './resultpage/resultpage';

export const routes: Routes = [
    {path:"",component:Frontpage},
    {path:"login",component:Loginpage},
    {path:"search",component:Searchpage},
    {path:"results",component:Resultpage}
];
