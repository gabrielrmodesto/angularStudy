import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { ProjectsService } from '../services/projects.service';

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

	constructor(
		private alunoService: AlunosService,
		private projectsService: ProjectsService
	) {
		this.alunos = this.alunoService.getAlunos();
	}

	ngOnInit(): void {
		this.projectsService.projects.subscribe((projects) => {
			this.projects = projects;
		});
	}

	handleClick() {
		alert('Hi');
	}
	getProjects() {
		this.projectsService.getProjects(this.searchText);
	}
}
