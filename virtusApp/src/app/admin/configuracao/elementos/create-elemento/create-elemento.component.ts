import { Component, OnInit } from '@angular/core';
import { Elemento } from '../elemento';
import { ElementoService } from '../elemento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-elemento',
  templateUrl: './create-elemento.component.html',
  styleUrls: ['./create-elemento.component.css']
})
export class CreateElementoComponent implements OnInit {

  
  elemento: Elemento = new Elemento()
  constructor(private elementoSevice: ElementoService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('submit',this.elemento);
    this.saveElemento()
  }

  saveElemento(){
    this.elementoSevice.createElemento(this.elemento).subscribe( data =>{
      console.log('Save elemento:',data);
      this.goToElementoList();
    },
    error => console.log(error));
    
  }

  goToElementoList(){
    this.router.navigate(['elemento-list']) //O path elemento devera ser alterado para elemento-details ou elemento view depois
  }



}
