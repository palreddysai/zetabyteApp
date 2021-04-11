import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModifyWatchListComponent } from './modify-watch-list/modify-watch-list.component';

export interface watchListData {
  title: string;
  infoUrl: string;
  episodes: number;
  watchUrl: string;
}
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModifyWatchListComponent } from './modify-watch-list/modify-watch-list.component';

export interface watchListData {
  id:number;
  title: string;
  infoUrl: string;
  episodes: number;
  watchUrl: string;
}

const ELEMENT_DATA: watchListData[] = [
  {id:1,title:'Shingeki no Kyojin: The Final Season', episodes: 16, infoUrl: 'https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season', watchUrl: 'https://www12.9anime.to/watch/attack-on-titan-final-season.k524/ep-1'},
  {id:2,title:'Kimetsu no Yaiba Movie: Mugen Ressha-hen', episodes: 1, infoUrl: 'https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen', watchUrl: 'https://demonslayer-anime.com/risshihen/streaming/'},
  {id:3,title:'Start-up', episodes: 16, infoUrl: 'https://asianwiki.com/Start-Up_(Korean_Drama)', watchUrl: 'https://kissasians.org/detail/start-up-2020/'},

];

@Component({
  selector: 'app-watch-list-view',
  templateUrl: './watch-list-view.component.html',
  styleUrls: ['./watch-list-view.component.css']
})
export class WatchListViewComponent implements OnInit {
  displayedColumns: string[] = ['id','title', 'episodes', 'infoUrl', 'watchUrl','action'];
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
