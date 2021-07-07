import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../ciclo';
import { CicloService } from '../ciclo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ciclo',
  templateUrl: './create-ciclo.component.html',
  styleUrls: ['./create-ciclo.component.css']
})
export class CreateCicloComponent implements OnInit {

  
  ciclo: Ciclo = new Ciclo()

  
  constructor(private cicloSevice: CicloService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('submit',this.ciclo);
    this.saveCiclo()
  }

  saveCiclo(){
    this.cicloSevice.createCiclo(this.ciclo).subscribe( data =>{
      console.log('Save ciclo:',data);
      this.goToCicloList();
    },
    error => console.log(error));
    }



  goToCicloList(){
    this.router.navigate(['ciclo-list']) //O path ciclo devera ser alterado para ciclo-details ou ciclo view depois
  }



}
