import { Component, OnInit } from '@angular/core';
import { TipoNota } from '../tipoNota';
import { TipoNotaService } from '../tipoNota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tipoNota',
  templateUrl: './create-tipoNota.component.html',
  styleUrls: ['./create-tipoNota.component.css']
})
export class CreateTipoNotaComponent implements OnInit {

  
  tipoNota: TipoNota = new TipoNota()
  constructor(private tipoNotaSevice: TipoNotaService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('submit',this.tipoNota);
    this.saveTipoNota()
  }

  saveTipoNota(){
    this.tipoNotaSevice.createTipoNota(this.tipoNota).subscribe( data =>{
      console.log('Save tipoNota:',data);
      this.goToTipoNotaList();
    },
    error => console.log(error));
    
  }

  goToTipoNotaList(){
    this.router.navigate(['tipoNota-list']) //O path tipoNota devera ser alterado para tipoNota-details ou tipoNota view depois
  }



}
