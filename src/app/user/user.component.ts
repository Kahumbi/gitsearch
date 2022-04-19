import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { SearchGithubService } from '../search-github.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = new FormControl('');
  user:Users;
  searchGithubService:SearchGithubService;
  /*
    name,url avatar_url, public_repos, followers, fol
  */

  constructor(searchGithubService:SearchGithubService) {
    this.searchGithubService = searchGithubService
    this.user = new Users("","","",0,0,0,new Date());
  }
  ngOnInit(): void {
  }

  searchGithub(){
    console.log(this.name.value)
  }

  async getInfoWithPromise(username:string){
    await this.searchGithubService.getUserInfor(username).then((data:any) => {
      this.user.name = data.name;
      this.user.avatar_url = data.avatar_url;
      this.user.public_repos = data.public_repos;
      this.user.following = data.following;
      this.user.followers = data.followers;
      this.user.created_at = data.created_at;
    })

  }

}

