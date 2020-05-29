import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

interface GithubResponse {
	incomplete_results: boolean;
	items: any[];
	total_count: number;
}
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

			const url = `https://api.github.com/search/repositories`;
			const params = new HttpParams().set('q',this.searchText);
			const headers = new HttpHeaders().set('Content-type', 'text/html');

			this.http.get<GithubResponse>(url, {params, headers}).subscribe((response) => {
				this.projects = response.items;
			});
		}
	}
}
