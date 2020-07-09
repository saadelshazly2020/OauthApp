"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { UserComponent } from './components/user.component';
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    //{ path: 'user', component: UserComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map