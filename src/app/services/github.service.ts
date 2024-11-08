import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repo} from '../models/repo.model';
import {GITHUB_USERNAME} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //For more info on Github Api, look at https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28#list-repositories-starred-by-a-user
  private repoApiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/starred`;
  constructor(private httpClient: HttpClient) { }

  getRepos():Observable<Repo[]> {
    return this.httpClient.get<Repo[]>(this.repoApiUrl);
  }

}
