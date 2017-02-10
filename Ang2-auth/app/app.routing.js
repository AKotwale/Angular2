System.register(['@angular/router', './public-deals.component', './private-deals.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, public_deals_component_1, private_deals_component_1;
    var appRoutes, routing, routedComponents;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (public_deals_component_1_1) {
                public_deals_component_1 = public_deals_component_1_1;
            },
            function (private_deals_component_1_1) {
                private_deals_component_1 = private_deals_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/deals',
                    pathMatch: 'full'
                },
                {
                    path: 'deals',
                    component: public_deals_component_1.PublicDealsComponent
                },
                {
                    path: 'special',
                    component: private_deals_component_1.PrivateDealsComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
            exports_1("routedComponents", routedComponents = [public_deals_component_1.PublicDealsComponent, private_deals_component_1.PrivateDealsComponent]);
        }
    }
});
//# sourceMappingURL=app.routing.js.map