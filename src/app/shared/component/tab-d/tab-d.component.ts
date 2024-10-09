import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-d',
  templateUrl: './tab-d.component.html',
  styleUrls: ['./tab-d.component.scss']
})
export class TabDComponent implements OnInit {
selectedFrameWork:string='angular'
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(val:string){
  this.selectedFrameWork=val
  }
}
