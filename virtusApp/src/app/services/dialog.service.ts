import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmDeleteComponent } from '../dialog/dialog-confirm-delete/dialog-confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }


  openConfirmDialog(msg:any){
    return this.dialog.open(DialogConfirmDeleteComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose:true,
      data :{
        message : msg
      }
    });
  }
  
}
