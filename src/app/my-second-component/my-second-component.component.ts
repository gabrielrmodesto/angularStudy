import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { HttpClient } from '@angular/common/http';

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

	searchText = '';
	projects = [];

	constructor(private alunoService: AlunosService, private http: HttpClient) {
		this.alunos = this.alunoService.getAlunos();
	}

	ngOnInit(): void {}

	handleClick() {
		alert('Hi');
	}

	getProjects() {
		if (this.searchText) {
			const url = `https://api.github.com/search/repositories?q=${this.searchText}`;

			this.http.get(url).subscribe(response => {
				this.projects = response['items'];
			})
		}
	}
}
