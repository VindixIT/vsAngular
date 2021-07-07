import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const routes: Routes = [
 // {path: '', component: WelcomeComponent},
 // {path: 'ciclo-list', component: CicloListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
