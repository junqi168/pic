var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router", "../_services/index"], function (require, exports, core_1, router_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccountComponent = /** @class */ (function () {
        function AccountComponent(router, userService, alertService) {
            this.router = router;
            this.userService = userService;
            this.alertService = alertService;
            this.model = {};
            this.loading = false;
        }
        AccountComponent.prototype.register = function () {
            var _this = this;
            this.loading = true;
            this.userService.update(this.model)
                .subscribe(function (data) {
                _this.alertService.success('Account successful', true);
                _this.router.navigate(['login']);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        };
        AccountComponent = __decorate([
            core_1.Component({
                moduleId: module.id,
                templateUrl: 'account.component.html'
            }),
            __metadata("design:paramtypes", [router_1.Router,
                index_1.UserService,
                index_1.AlertService])
        ], AccountComponent);
        return AccountComponent;
    }());
    exports.AccountComponent = AccountComponent;
});
//# sourceMappingURL=account.component.js.map