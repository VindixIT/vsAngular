import { Component, OnInit } from '@angular/core';
import {ComponenteService} from '../componente.service';
import { Componente } from '../componente';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateComponenteComponent } from '../update-componente/update-componente.component';

@Component({
  selector: 'app-componente-list',
  templateUrl: './componente-list.component.html',
  styleUrls: ['./componente-list.component.css']
})
export class ComponenteListComponent implements OnInit {

	id!: number
	componentes!: Componente[] 
	
  constructor(private componenteService: ComponenteService,  
	private router:Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
	this.getComponentes();
	}
	
   private getComponentes(){
		this.componenteService.getComponentesList().subscribe(data => {
			this.componentes = data;
			});
	}

//    cicloDetails(id: number){
//		this.router.navigate(['ciclo-details', id]);
//	}  Visualizacao por ID, Componente ainda nao criado (ng g c ciclo-details)

	updateComponente(id: number){
		console.log(id)
		this.router.navigate(['update-componente', id]);
		
	}

	deleteComponente(id: number){
		this.componenteService.deleteComponente(id).subscribe(data => {
		console.log('Deletou isso:',data);
		this.getComponentes();
		})
	}
	openModal(id:number) {
		const dialogConfig = new MatDialogConfig();
		// The user can't close the dialog by clicking outside its body
		dialogConfig.disableClose = true;
		dialogConfig.id = "modal-component", id;
		dialogConfig.height = "650px";
		dialogConfig.width = "1000px";
		// https://material.angular.io/components/dialog/overview
		const modalDialog = this.matDialog.open(UpdateComponenteComponent, dialogConfig);
	  }
}
