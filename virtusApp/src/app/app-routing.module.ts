import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about/about.component';
//Ciclo
import { CicloListComponent } from './admin/configuracao/ciclos/ciclo-list/ciclo-list.component';
import { CreateCicloComponent } from './admin/configuracao/ciclos/create-ciclo/create-ciclo.component';
import { UpdateCicloComponent } from './admin/configuracao/ciclos/update-ciclo/update-ciclo.component';
//Componente
import { ComponenteListComponent } from './admin/configuracao/componentes/componente-list/componente-list.component';
import { CreateComponenteComponent } from './admin/configuracao/componentes/create-componente/create-componente.component';
import { UpdateComponenteComponent } from './admin/configuracao/componentes/update-componente/update-componente.component';
//Pilar
import { PilarListComponent } from './admin/configuracao/pilares/pilar-list/pilar-list.component';
import { CreatePilarComponent } from './admin/configuracao/pilares/create-pilar/create-pilar.component';
import { UpdatePilarComponent } from './admin/configuracao/pilares/update-pilar/update-pilar.component';
// Elemento
import { ElementoListComponent } from './admin/configuracao/elementos/elemento-list/elemento-list.component';
import { CreateElementoComponent } from './admin/configuracao/elementos/create-elemento/create-elemento.component';
import { UpdateElementoComponent } from './admin/configuracao/elementos/update-elemento/update-elemento.component';
// Tipo Notas
import { TipoNotaListComponent } from './admin/configuracao/tiposNotas/tipoNota-list/tipoNota-list.component';
import { CreateTipoNotaComponent } from './admin/configuracao/tiposNotas/create-tipoNota/create-tipoNota.component';
import { UpdateTipoNotaComponent } from './admin/configuracao/tiposNotas/update-tipoNota/update-tipoNota.component';


//import { ConfiguracaoComponent } from './admin/configuracao/configuracao.component'
import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'ciclo-list', component: CicloListComponent},
  {path: 'create-ciclo', component: CreateCicloComponent},
  {path: 'update-ciclo/:id', component: UpdateCicloComponent},
  {path: 'componente-list', component: ComponenteListComponent},
  {path: 'create-componente', component: CreateComponenteComponent},
  {path: 'update-componente/:id', component: UpdateComponenteComponent},
  {path: 'pilar-list', component: PilarListComponent},
  {path: 'create-pilar', component: CreatePilarComponent},
  {path: 'update-pilar/:id', component: UpdatePilarComponent},
  {path: 'elemento-list', component: ElementoListComponent},
  {path: 'create-elemento', component: CreateElementoComponent},
  {path: 'update-elemento/:id', component: UpdateElementoComponent},
  {path: 'tipoNota-list', component: TipoNotaListComponent},
  {path: 'create-tipoNota', component: CreateTipoNotaComponent},
  {path: 'update-tipoNota/:id', component: UpdateTipoNotaComponent},

  //{path: 'ciclo-details/:id', component: CicloDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
