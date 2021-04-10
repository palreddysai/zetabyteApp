import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModifyWatchListComponent } from './modify-watch-list/modify-watch-list.component';

export interface watchListData {
  title: string;
  infoUrl: string;
  episodes: number;
  watchUrl: string;
}

const ELEMENT_DATA: watchListData[] = [
  {title:'Shingeki no Kyojin: The Final Season', episodes: 16, infoUrl: 'movie info', watchUrl: 'watch movie'},
  {title:'Kimetsu no Yaiba Movie: Mugen Ressha-hen', episodes: 1, infoUrl: 'movie info', watchUrl: 'watch movie'},
  {title:'Start-up', episodes: 16, infoUrl: 'movie info', watchUrl: 'watch movie'},

];

@Component({
  selector: 'app-watch-list-view',
  templateUrl: './watch-list-view.component.html',
  styleUrls: ['./watch-list-view.component.css']
})
export class WatchListViewComponent implements OnInit {
  displayedColumns: string[] = ['title', 'episodes', 'infoUrl', 'watchUrl','action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  detailsDialog() {
    const dialogRef = this.dialog.open(ModifyWatchListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
