import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { ProjectsService } from '../services/projects.service';
import { takeWhile } from 'rxjs/operators';

@Component({
	selector: 'app-my-second-component',
	templateUrl: './my-second-component.component.html',
	styleUrls: ['./my-second-component.component.css'],
})
export class MySecondComponentComponent implements OnInit, OnDestroy {
	isAlive = true;
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
		this.projectsService.projects
			.pipe(takeWhile(() => this.isAlive))
			.subscribe((projects) => {
				this.projects = projects;
			});
	}
	ngOnDestroy(): void {
		this.isAlive = false;
	}

	handleClick() {
		alert('Hi');
	}
	getProjects() {
		this.projectsService.getProjects(this.searchText);
	}
}
