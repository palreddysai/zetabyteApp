import { Inject, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { watchListData } from '../watch-list-view.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modify-watch-list',
  templateUrl: './modify-watch-list.component.html',
  styleUrls: ['./modify-watch-list.component.css']
})
export class ModifyWatchListComponent implements OnInit {
  action:string;
  local_data:any;
  movieListForm: NgForm;

  constructor(
    public dialogRef: MatDialogRef<ModifyWatchListComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: watchListData
  ) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
