import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-d-attri',
  templateUrl: './tab-d-attri.component.html',
  styleUrls: ['./tab-d-attri.component.scss']
})
export class TabDAttriComponent implements OnInit {
selectedFrameWork:string ='angular'
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(eve:any){
    console.log(eve.target.getAttribute('data-framework'))
    this.selectedFrameWork=eve.target.getAttribute('data-framework')
  }
}
