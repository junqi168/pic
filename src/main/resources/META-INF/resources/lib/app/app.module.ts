import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { AccountComponent } from './account/index';
import {APP_BASE_HREF} from '@angular/common';
import {WalletComponent} from "./wallet/index";


@NgModule({
	imports: [BrowserModule, FormsModule,  routing],
	declarations: [AppComponent,  AccountComponent, WalletComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}
