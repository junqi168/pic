import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: '/o/angular-npm-portlet/lib/app/wallet/wallet.component.html',
    styleUrls: ['/o/angular-npm-portlet/lib/app/wallet/wallet.component.css']
})

export class WalletComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router){}


    register() {
       return null;
    }
}
