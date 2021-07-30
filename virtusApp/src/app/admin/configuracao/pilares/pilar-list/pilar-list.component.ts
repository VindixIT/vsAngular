import { Component, OnInit } from '@angular/core';
import { PilarService} from '../pilar.service';
import { Pilar } from '../pilar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdatePilarComponent } from '../update-pilar/update-pilar.component';
import { DialogService } from 'src/app/services/dialog.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-pilar-list',
  templateUrl: './pilar-list.component.html',
  styleUrls: ['./pilar-list.component.css']
})
export class PilarListComponent implements OnInit {

	id!: number
	pilares!: Pilar[] 
	
  constructor(private pilarService: PilarService,  
	private router:Router, public matDialog: MatDialog,
	private dialogService:DialogService,
	private notificationService:NotificationService) { }

  ngOnInit(): void {
	this.getPilares();
	}
	
   private getPilares(){
		this.pilarService.getPilaresList().subscribe(data => {
			this.pilares = data;
			});
	}

//    cicloDetails(id: number){
//		this.router.navigate(['ciclo-details', id]);
//	}  Visualizacao por ID, Pilar ainda nao criado (ng g c ciclo-details)

	updatePilar(id: number){
		console.log(id)
		this.router.navigate(['update-pilar', id]);
		
	}

	deletePilar(id: number){
		this.dialogService.openConfirmDialog('Tem certeza que deseja apagar o Registro??')
		.afterClosed().subscribe(res =>{
			if (res){
				console.log('!');
				this.pilarService.deletePilar(id).subscribe(data => {
				this.getPilares();
				this.notificationService.warn('Ciclo deletado com sucesso!')
			})
		}
	});
	
}
	openModal(id:number) {
		const dialogConfig = new MatDialogConfig();
		// The user can't close the dialog by clicking outside its body
		dialogConfig.disableClose = true;
		dialogConfig.id = "modal-component", id;
		dialogConfig.height = "650px";
		dialogConfig.width = "1000px";
		// https://material.angular.io/components/dialog/overview
		const modalDialog = this.matDialog.open(UpdatePilarComponent, dialogConfig);
	  }
}
