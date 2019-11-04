import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { BridgeScreenComponent } from './components/bridge-screen/bridge-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent
    },
    {
        path: 'bridge',
        component: BridgeScreenComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
