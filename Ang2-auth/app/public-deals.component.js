System.register(['@angular/core', './auth.service', './deal.service'], function(exports_1, context_1) {
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
    var core_1, auth_service_1, deal_service_1;
    var PublicDealsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (deal_service_1_1) {
                deal_service_1 = deal_service_1_1;
            }],
        execute: function() {
            PublicDealsComponent = (function () {
                function PublicDealsComponent(_dealService, authService) {
                    this._dealService = _dealService;
                    this.authService = authService;
                    console.log("you have hit deals !!!");
                }
                PublicDealsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('Inside ng init on deal service');
                    this._dealService.getPublicDeals().subscribe(function (deals) { return _this.publicDeals = deals; });
                };
                PublicDealsComponent.prototype.purchase = function (item) {
                    alert("You bought the: " + item.name);
                };
                PublicDealsComponent = __decorate([
                    core_1.Component({
                        //selector: 'public-deals',
                        templateUrl: './app/public-deals.component.html',
                        styleUrls: ['./app/public-deals.component.css']
                    }), 
                    __metadata('design:paramtypes', [deal_service_1.DealService, auth_service_1.AuthService])
                ], PublicDealsComponent);
                return PublicDealsComponent;
            }());
            exports_1("PublicDealsComponent", PublicDealsComponent);
        }
    }
});
//# sourceMappingURL=public-deals.component.js.map