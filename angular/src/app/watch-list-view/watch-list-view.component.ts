import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModifyWatchListComponent } from './modify-watch-list/modify-watch-list.component';

export interface watchListData {
  id:number;
  title: string;
  infoUrl: string;
  episodes: number;
  watchUrl: string;
}

const MOVIE_DATA: watchListData[] = [
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
  dataSource = MOVIE_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  detailsDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ModifyWatchListComponent, {
      width: '30%',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
  addRowData(row_obj){
    this.dataSource.push({
      id:row_obj.id,
      title:row_obj.title,
      infoUrl:row_obj.infoUrl,
      episodes:row_obj.episodes,
      watchUrl:row_obj.watchUrl
    });
    this.table.renderRows();

  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.title = row_obj.title;
       value.infoUrl = row_obj.infoUrl;
     value.episodes = row_obj.episodes;
      value.watchUrl = row_obj.watchUrl;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}
