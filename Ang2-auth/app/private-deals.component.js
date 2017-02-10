System.register(['@angular/core', './deal.service'], function(exports_1, context_1) {
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
    var core_1, deal_service_1;
    var PrivateDealsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (deal_service_1_1) {
                deal_service_1 = deal_service_1_1;
            }],
        execute: function() {
            //import {HTTP_PROVIDERS} from 'angular2/http';
            PrivateDealsComponent = (function () {
                function PrivateDealsComponent(dealService) {
                    this.dealService = dealService;
                }
                PrivateDealsComponent.prototype.getPrivateDeals = function () {
                    var _this = this;
                    this.dealService.getPrivateDeals()
                        .subscribe(function (privateDeals) { return _this.privateDeals = privateDeals; });
                    //console.log("Does not supported !!!");
                };
                PrivateDealsComponent.prototype.ngOnInit = function () {
                    this.getPrivateDeals();
                    //console.log("Does not supported !!!");
                };
                PrivateDealsComponent.prototype.purchase = function (item) {
                    alert("You bought the: " + item.name);
                };
                PrivateDealsComponent = __decorate([
                    core_1.Component({
                        selector: 'private-deals',
                        templateUrl: './app/private-deals.component.html',
                        styleUrls: ['./app/private-deals.component.css']
                    }), 
                    __metadata('design:paramtypes', [deal_service_1.DealService])
                ], PrivateDealsComponent);
                return PrivateDealsComponent;
            }());
            exports_1("PrivateDealsComponent", PrivateDealsComponent);
        }
    }
});
//# sourceMappingURL=private-deals.component.js.map