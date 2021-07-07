import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AppRouters} from './app.routes';
import { PrevicComponent } from '../app/previc/previc.component';
import { AuthService} from './services/auth.service';
import { PrevicService} from './previc/previc.service';
import { FormsModule } from '@angular/forms'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
//Ciclo
import { CicloListComponent } from './admin/configuracao/ciclos/ciclo-list/ciclo-list.component';
import { CreateCicloComponent } from './admin/configuracao/ciclos/create-ciclo/create-ciclo.component'
import { UpdateCicloComponent } from './admin/configuracao/ciclos/update-ciclo/update-ciclo.component';
//Componente
import { ComponenteListComponent } from './admin/configuracao/componentes/componente-list/componente-list.component';
import { CreateComponenteComponent } from './admin/configuracao/componentes/create-componente/create-componente.component';
import { UpdateComponenteComponent } from './admin/configuracao/componentes/update-componente/update-componente.component';
//Pilar
import { PilarListComponent } from './admin/configuracao/pilares/pilar-list/pilar-list.component';
import { CreatePilarComponent } from './admin/configuracao/pilares/create-pilar/create-pilar.component';
import { UpdatePilarComponent } from './admin/configuracao/pilares/update-pilar/update-pilar.component';
//Elemento
import { ElementoListComponent } from './admin/configuracao/elementos/elemento-list/elemento-list.component';
import { CreateElementoComponent } from './admin/configuracao/elementos/create-elemento/create-elemento.component';
import { UpdateElementoComponent } from './admin/configuracao/elementos/update-elemento/update-elemento.component';

//TipoNotas
import { TipoNotaListComponent } from './admin/configuracao/tiposNotas/tipoNota-list/tipoNota-list.component';
import { CreateTipoNotaComponent } from './admin/configuracao/tiposNotas/create-tipoNota/create-tipoNota.component';
import { UpdateTipoNotaComponent } from './admin/configuracao/tiposNotas/update-tipoNota/update-tipoNota.component';

import { AboutComponent } from './about/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    PrevicComponent,

    CicloListComponent,
    CreateCicloComponent,
    UpdateCicloComponent,

    ComponenteListComponent,
    CreateComponenteComponent,
    UpdateComponenteComponent,

    PilarListComponent,
    CreatePilarComponent,
    UpdatePilarComponent,
    
    ElementoListComponent,
    CreateElementoComponent,
    UpdateElementoComponent,
    
    TipoNotaListComponent,
    CreateTipoNotaComponent,
    UpdateTipoNotaComponent,

    AboutComponent,

    
    
    
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRouters,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    
  ],
  providers: [PrevicService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    UpdateCicloComponent, 
    UpdateComponenteComponent,
    UpdatePilarComponent,
    UpdateElementoComponent,
    UpdateTipoNotaComponent,

  ]
})
export class AppModule { }
