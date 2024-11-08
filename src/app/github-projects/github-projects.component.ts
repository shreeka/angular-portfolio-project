import {Component, OnInit} from '@angular/core';
import {GithubService} from '../services/github.service';
import {Observable} from 'rxjs';
import {Repo} from '../models/repo.model';
import {GITHUB_USERNAME} from '../../constants';

@Component({
  selector: 'github-projects',
  templateUrl: './github-projects.component.html',
  styleUrl: './github-projects.component.css'
})
export class GithubProjectsComponent implements OnInit{

  projects:Repo[]= [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
   this.githubService.getRepos().subscribe(
     (repos) => {
       this.filterUserRepos(repos);
     },
     (error) => {
       console.error('Error fetching repositories: ',error);
     }
   );
  }

  filterUserRepos(repos:Repo[]){
    this.projects = repos.filter(
      repo => repo.owner.login === GITHUB_USERNAME
    );
  }
}
