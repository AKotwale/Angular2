System.register(['@angular/core', './auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, auth_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                    this.title = 'Daily Deals';
                    console.log('In app component constructor ...');
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // We'll call our root component daily-deals
                        selector: 'daily-deals',
                        template: "\n  <div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"navbar-header\">\n        <!--  <a class=\"navbar-brand\" routerLink=\"/dashboard\"></a> -->\n        </div>\n        <!-- On the left side of our navbar we'll display the two links for public and private deals -->\n        <ul class=\"nav navbar-nav\">\n          <li>\n             <a [routerLink] = \"['deals']\">Deals</a>\n          </li>\n          <li>\n              <a [routerLink] = \"['special']\">Private Deals</a>\n          </li>\n        </ul>\n        <!-- On the right side of our navbar we'll display the login and logout actions depending on user state -->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a (click)=authService.login() *ngIf=\"!authService.loggedIn()\">Log In</a>\n          </li>\n          <li>\n            <a (click)=authService.logout() *ngIf=\"authService.loggedIn()\">Log Out</a>\n          </li>\n        </ul>\n    </nav>\n    <div class=\"col-sm-12\">\n      <!-- The router-outlet directive will display the component based on the route we are on, more on this soon -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  ",
                        // We'll add an inline style to properly display the navbar
                        styles: ['.navbar-right { margin-right: 0px !important}']
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map