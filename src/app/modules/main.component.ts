import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: [],
})
export class MainComponent implements OnInit {


  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
   
  }

}