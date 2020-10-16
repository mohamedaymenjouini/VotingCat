import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { MatIcon } from '@angular/material';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private catservice: CatsService) {
    this.getAllCatsValues();
  }

  ngOnInit() {
  }

  getAllCatsValues() {
    this.catservice.getAllCats().subscribe(data => {
      this.catservice.forecasts = data;
    });


  }



  chooseCat(c: Cat) {
    c.coloricon = "red";
    this.catservice.lastcatChosen.coloricon = "black";
    this.catservice.lastcatChosen = c;
    this.vote(c);
    this.alertUser();
  }
  vote(c: Cat) {

  }
  alertUser() {
    alert("Thanks for voting.Click see result to access to the result page");
  }

}
