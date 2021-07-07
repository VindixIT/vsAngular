import { Component, OnInit } from '@angular/core';
import { ComponenteService } from '../componente.service';
import { Componente } from '../componente';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-componente',
  templateUrl: './update-componente.component.html',
  styleUrls: ['./update-componente.component.css']
})
export class UpdateComponenteComponent implements OnInit {

  id!: number
	componente: Componente = new Componente()
	
  constructor(private ComponenteService: ComponenteService,  
	  private route: ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('this is the id from ngOnInit', this.id)
	  this.ComponenteService.getComponenteById(this.id)
    .subscribe(data => {
      console.log(data)
			this.componente = data;
			}, error => console.log(error));
	}
  updateComponente(){
    this.ComponenteService.updateComponente(this.id, this.componente)
      .subscribe(data => {
        console.log(data);
        this.componente = new Componente();
        this.goToComponenteList
      }, error => console.log(error));

    }

    onSubmit(){
      this.ComponenteService.updateComponente(this.id, this.componente).subscribe( data =>{
        console.log('estou enviando update?',this.id); 
        this.goToComponenteList()
         console.log(data);

      });
    }
    goToComponenteList(){
      this.router.navigate(['/componente-list'])
      
    }


}
