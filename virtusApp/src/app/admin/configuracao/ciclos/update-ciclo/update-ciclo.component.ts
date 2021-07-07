import { Component, OnInit } from '@angular/core';
import { CicloService } from '../ciclo.service';
import { Ciclo } from '../ciclo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-ciclo',
  templateUrl: './update-ciclo.component.html',
  styleUrls: ['./update-ciclo.component.css']
})
export class UpdateCicloComponent implements OnInit {

  id!: number
	ciclo: Ciclo = new Ciclo()
	
  constructor(private cicloService: CicloService,  
	  private route: ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('this is the id from ngOnInit', this.id)
	  this.cicloService.getCicloById(this.id)
    .subscribe(data => {
      console.log(data)
			this.ciclo = data;
			}, error => console.log(error));
	}
  updateCiclo(){
    this.cicloService.updateCiclo(this.id, this.ciclo)
      .subscribe(data => {
        console.log(data);
        this.ciclo = new Ciclo();
        this.goToCicloList
      }, error => console.log(error));

    }

    onSubmit(){
      this.cicloService.updateCiclo(this.id, this.ciclo).subscribe( data =>{
        console.log('estou enviando update?',this.id); 
        this.goToCicloList()
         console.log(data);

      });
    }
    goToCicloList(){
      this.router.navigate(['/ciclo-list'])
      
    }


}
