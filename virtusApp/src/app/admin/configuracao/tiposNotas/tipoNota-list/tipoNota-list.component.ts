import { Component, OnInit } from '@angular/core';
import { TipoNotaService} from '../tipoNota.service';
import { TipoNota } from '../tipoNota';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateTipoNotaComponent } from '../update-tipoNota/update-tipoNota.component';

@Component({
  selector: 'app-tipoNota-list',
  templateUrl: './tipoNota-list.component.html',
  styleUrls: ['./tipoNota-list.component.css']
})
export class TipoNotaListComponent implements OnInit {

	id!: number
	tipoNotas!: TipoNota[] 
	
  constructor(private tipoNotaService: TipoNotaService,  
	private router:Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
	this.getTipoNotas();
	}
	
   private getTipoNotas(){
		this.tipoNotaService.getTipoNotasList().subscribe(data => {
			this.tipoNotas = data;
			});
	}

//    cicloDetails(id: number){
//		this.router.navigate(['ciclo-details', id]);
//	}  Visualizacao por ID, TipoNota ainda nao criado (ng g c ciclo-details)

	updateTipoNota(id: number){
		console.log(id)
		this.router.navigate(['update-tipoNota', id]);
		
	}

	deleteTipoNota(id: number){
		this.tipoNotaService.deleteTipoNota(id).subscribe(data => {
		console.log('Deletou isso:',data);
		this.getTipoNotas();
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
		const modalDialog = this.matDialog.open(UpdateTipoNotaComponent, dialogConfig);
	  }
}
