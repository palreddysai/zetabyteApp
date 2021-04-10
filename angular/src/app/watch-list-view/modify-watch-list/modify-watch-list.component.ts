import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-watch-list',
  templateUrl: './modify-watch-list.component.html',
  styleUrls: ['./modify-watch-list.component.css']
})
export class ModifyWatchListComponent implements OnInit {
  movieList = [];

  constructor() { }

  ngOnInit(): void {
  }

  addList(){
    this.movieList.push();
    console.log("list",this.movieList)
  }
}
