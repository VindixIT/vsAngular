import { Component, OnInit } from '@angular/core';
import {CicloService} from '../ciclo.service';
import { Ciclo } from '../ciclo';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateCicloComponent } from '../update-ciclo/update-ciclo.component';

@Component({
  selector: 'app-ciclo-list',
  templateUrl: './ciclo-list.component.html',
  styleUrls: ['./ciclo-list.component.css']
})
export class CicloListComponent implements OnInit {

	id!: number
	ciclos!: Ciclo[] 
	
  constructor(private cicloService: CicloService,  
	private router:Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
	this.getCiclos();
	}
	
   private getCiclos(){
		this.cicloService.getCiclosList().subscribe(data => {
			this.ciclos = data;
			});
	}

//    cicloDetails(id: number){
//		this.router.navigate(['ciclo-details', id]);
//	}  Visualizacao por ID, Componente ainda nao criado (ng g c ciclo-details)

	updateCiclo(id: number){
		console.log(id)
		this.router.navigate(['update-ciclo', id]);
		
	}

	deleteCiclo(id: number){
		this.cicloService.deleteCiclo(id).subscribe(data => {
		console.log('Deletou isso:',data);
		this.getCiclos();
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
		const modalDialog = this.matDialog.open(UpdateCicloComponent, dialogConfig);
	  }
}
