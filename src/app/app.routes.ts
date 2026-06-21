import { Routes } from '@angular/router';
import { Frontpage } from './frontpage/frontpage';
import { Loginpage } from './loginpage/loginpage';
import { Searchpage } from './searchpage/searchpage';
import { Resultpage } from './resultpage/resultpage';
import { Registerpage } from './registerpage/registerpage';

export const routes: Routes = [
    {path:"",component:Frontpage},
    {path:"login",component:Loginpage},
    {path:"register",component:Registerpage},
    {path:"search",component:Searchpage},
    {path:"results",component:Resultpage}
];
