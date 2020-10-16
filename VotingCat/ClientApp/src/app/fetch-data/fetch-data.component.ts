import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {


  constructor(private catservice: CatsService) {
    this.getResultVote();
  }

  ngOnInit() {
  }

  getResultVote() {
    this.catservice.getResult().subscribe(data =>
    {
      this.catservice.voteresults = data;
      this.cheatVote();
    });


  }
  // on va tricher le vote ;)
  private cheatVote() {
    if (this.catservice.lastcatChosen.id)
    { 
    let index = this.catservice.voteresults.findIndex(c => c.cat.id == this.catservice.lastcatChosen.id);
      if (index != -1)
      {
      this.catservice.voteresults[index].vote = 70;

    }
    else {
      this.catservice.voteresults[0].cat = this.catservice.lastcatChosen;
      this.catservice.voteresults[0].vote = 70;
      }
    }
  }
}

