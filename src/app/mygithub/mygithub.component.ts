import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { SearchGithubService } from '../search-github.service';

@Component({
  selector: 'app-mygithub',
  templateUrl: './mygithub.component.html',
  styleUrls: ['./mygithub.component.css']
})
export class MygithubComponent implements OnInit {


gwagon:string = "assets/Images/gwagon.jpeg"

  // constructor() { }


  ngOnInit(): void {
  }

}
