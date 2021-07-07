import { Component, OnInit } from '@angular/core';
import { Componente } from '../componente';
import { ComponenteService } from '../componente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-componente',
  templateUrl: './create-componente.component.html',
  styleUrls: ['./create-componente.component.css']
})
export class CreateComponenteComponent implements OnInit {

  
  componente: Componente = new Componente()
  constructor(private componenteSevice: ComponenteService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('submit',this.componente);
    this.saveComponente()
  }

  saveComponente(){
    this.componenteSevice.createComponente(this.componente).subscribe( data =>{
      console.log('Save componente:',data);
      this.goToComponenteList();
    },
    error => console.log(error));
    
  }

  goToComponenteList(){
    this.router.navigate(['componente-list']) //O path componente devera ser alterado para componente-details ou componente view depois
  }



}
