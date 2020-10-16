import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat.model';
import { Observable } from 'rxjs';
import { Vote } from '../models/result.model';

@Injectable()
export class CatsService {
  public forecasts: Cat[] = new Array();
  public voteresults: Vote[] = new Array();
  public lastcatChosen: Cat = new Cat();
  geturl: string = "";


  constructor(private httpobj: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.geturl = baseUrl;
  }
  getAllCats(): Observable<Cat[]>
  {
    return this.httpobj.get<Cat[]>(this.geturl + "VoteCat/Get")
  }

  postVote(): Observable<any> {
    return this.httpobj.post<Cat>(this.geturl + "Result/Post",Cat)
  }
  getResult(): Observable<Vote[]> {
    return this.httpobj.get<Vote[]>(this.geturl + "Result/Get")
  }


}


