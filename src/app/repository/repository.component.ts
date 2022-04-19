import { Component, OnInit } from '@angular/core';
import { Repos } from "../repos"  
import { SearchGithubService } from '../search-github.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  name = new FormControl('');
repos:Repos[]=[]

searchGithubService:SearchGithubService

  constructor(
    searchGithubService:SearchGithubService) { 
      this.searchGithubService= searchGithubService
    }
    searchGithub(){
      this.getInfoWithPromise(this.name.value)
    }

  ngOnInit(): void {
   
  }
  async getInfoWithPromise(username:string){
    await this.searchGithubService.getRepo(username).then((data:any) => {
      for(let i = 0;i<=data.length;i++){
        let repo:any = new Repos(data[i].name,data[i].description,data[i].html_url,data[i].owner["avatar_url"],data[i].created_at)
        this.repos.push(repo)
       
      }
     
    })

  }
}
