import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';

@Component({
	selector: 'app-my-second-component',
	templateUrl: './my-second-component.component.html',
	styleUrls: ['./my-second-component.component.css'],
})
export class MySecondComponentComponent implements OnInit {
	nome = 'Gabriel';
	isVisible = true;
	myValue = 4;
	myList = [1, 2, 3, 4, 5];
	aluno = {
		dados: {
			nome: '',
		},
	};
	alunos = [];

	constructor(private alunoService : AlunosService) {
		this.alunos = this.alunoService.getAlunos();
	}

	ngOnInit(): void {}

	handleClick(){
		alert('Hi');
	}
}
