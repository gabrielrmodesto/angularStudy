import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent implements OnInit {
	nome = 'Gabriel';
	isVisible = true;
	myValue = 4;
	myList = [1,2,3,4,5];
	aluno = {
		dados: {
			nome: ''
		}
	}
  constructor() { }

  ngOnInit(): void {
  }

}
