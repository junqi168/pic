import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: '/o/angular-npm-portlet/lib/app/account/account.component.html',
    styleUrls: ['/o/angular-npm-portlet/lib/app/account/account.component.css']
})

export class AccountComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router){}


    register() {
       return null;
    }
}
