import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  @Output() inputValue = new EventEmitter<string>();
  name = new FormControl('',Validators.required);

  searchGithub(name:string){
    this.inputValue.emit(name);
  }

  constructor() {
  }

	ngOnInit() {
	}

}



