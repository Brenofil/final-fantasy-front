import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // titles
  title = 'Final Fantasy XII: Clan Primer';
  shortTitle = 'FF-XII CP';

  constructor() {}

  ngOnInit(): void {}
}
