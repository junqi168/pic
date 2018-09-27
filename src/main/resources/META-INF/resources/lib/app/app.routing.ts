import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/index';
import {WalletComponent} from "./wallet/index";

const appRoutes: Routes = [
    { path: '', component: AccountComponent },
    { path: 'account', component: AccountComponent },
    { path: 'wallet', component: WalletComponent }
];

export const routing = RouterModule.forRoot(appRoutes);