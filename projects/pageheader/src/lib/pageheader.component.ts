import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core"

@Component({
  selector:"pageheader",
  templateUrl:"./pageheader.component.html",
  styleUrls:["./pageheader.component.scss"]
})
export class PageheaderComponent implements OnInit {
  @Input() page;
  constructor() { }

  ngOnInit() {
  }

}
