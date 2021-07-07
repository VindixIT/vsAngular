import { Component, OnInit } from '@angular/core';
import { ElementoService} from '../elemento.service';
import { Elemento } from '../elemento';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateElementoComponent } from '../update-elemento/update-elemento.component';

@Component({
  selector: 'app-elemento-list',
  templateUrl: './elemento-list.component.html',
  styleUrls: ['./elemento-list.component.css']
})
export class ElementoListComponent implements OnInit {

	id!: number
	elementos!: Elemento[] 
	
  constructor(private elementoService: ElementoService,  
	private router:Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
	this.getElementos();
	}
	
   private getElementos(){
		this.elementoService.getElementosList().subscribe(data => {
			this.elementos = data;
			});
	}

//    cicloDetails(id: number){
//		this.router.navigate(['ciclo-details', id]);
//	}  Visualizacao por ID, Elemento ainda nao criado (ng g c ciclo-details)

	updateElemento(id: number){
		console.log(id)
		this.router.navigate(['update-elemento', id]);
		
	}

	deleteElemento(id: number){
		this.elementoService.deleteElemento(id).subscribe(data => {
		console.log('Deletou isso:',data);
		this.getElementos();
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
		const modalDialog = this.matDialog.open(UpdateElementoComponent, dialogConfig);
	  }
}
