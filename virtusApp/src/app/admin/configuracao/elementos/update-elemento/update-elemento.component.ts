import { Component, OnInit } from '@angular/core';
import { ElementoService } from '../elemento.service';
import { Elemento } from '../elemento';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-elemento',
  templateUrl: './update-elemento.component.html',
  styleUrls: ['./update-elemento.component.css']
})
export class UpdateElementoComponent implements OnInit {

  id!: number
	elemento: Elemento = new Elemento()
	
  constructor(private ElementoService: ElementoService,  
	  private route: ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('this is the id from ngOnInit', this.id)
	  this.ElementoService.getElementoById(this.id)
    .subscribe(data => {
      console.log(data)
			this.elemento = data;
			}, error => console.log(error));
	}
  updateElemento(){
    this.ElementoService.updateElemento(this.id, this.elemento)
      .subscribe(data => {
        console.log(data);
        this.elemento = new Elemento();
        this.goToElementoList
      }, error => console.log(error));

    }

    onSubmit(){
      this.ElementoService.updateElemento(this.id, this.elemento).subscribe( data =>{
        console.log('estou enviando update?',this.id); 
        this.goToElementoList()
         console.log(data);

      });
    }
    goToElementoList(){
      this.router.navigate(['/elemento-list'])
      
    }


}
