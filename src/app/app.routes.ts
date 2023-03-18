import { Routes, RouterModule } from "@angular/router";
import { FormregisterComponent } from "./components/formregister/formregister.component";
import { LoginComponent } from "./components/login/login.component";

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: FormregisterComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'login'},
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);