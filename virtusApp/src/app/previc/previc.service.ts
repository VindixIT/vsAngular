import {Injectable} from '@angular/core';
import {Pendencia} from '../pendencias';
import {Observable, of} from 'rxjs';

@Injectable()
export class PrevicService {

  ELEMENT_DATA: Pendencia[] = [
    {posicao: 0, title: 'Previc 1', categoria: 'texto', autor: 'Nakata', criadoEm: new Date(), descricao: 'Body 1', status:'Completo'},
    {posicao: 1, title: 'Previc 2', categoria: 'texto', autor: 'Lucio', criadoEm: new Date(), descricao: 'Body 2', status:'Incompleto'},
    {posicao: 2, title: 'Previc 3', categoria: 'texto', autor: 'Masaru', criadoEm: new Date(), descricao: 'Body 3', status:'Completo'},
    {posicao: 3, title: 'Previc 4', categoria: 'texto', autor: 'Jorge', criadoEm: new Date(), descricao: 'Body 4', status:'Em andamento'},
    {posicao: 4, title: 'Previc 5', categoria: 'texto', autor: 'Paulo', criadoEm: new Date(), descricao: 'Body 5', status:'Entregue'},
  ];
  categorias = [
    {value: 'Supervisao', viewValue: 'Supervisao'},
    {value: 'Direcao', viewValue: 'Direcao'},
    {value: 'Super', viewValue: 'Super'}
  ];

  constructor() {
  }

  getPrevicData(): Observable<Pendencia[]> {
    return of<Pendencia[]>(this.ELEMENT_DATA);
  }

  getCategorias() {
    return this.categorias;
  }

  addPost(data: Pendencia) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index: number | undefined) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(1,index)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
