import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AlunosService {
  constructor() {}

  getAlunos(){
    return[{nome: 'Gabriel'},{nome: 'Clara'},{nome: 'Thais'}]
  }
}
