import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible: boolean = false;
  setVisible() {
    this.isVisible = !this.isVisible;
  }
  navigationMobile() {
    this.isVisible = false;
  }

}
