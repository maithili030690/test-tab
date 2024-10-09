import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-ngfor',
  templateUrl: './tab-ngfor.component.html',
  styleUrls: ['./tab-ngfor.component.scss']
})
export class TabNgforComponent implements OnInit {
 selectedFrameWork :string ='angular'
  tabArr:Array<Itab>=[
    {
    tabTitle :'Angular 12',
    frameWorkName:'angular',
    tabContent :'<p class="alert alert-info mb-0"><strong>Angular</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?</p>'
   },
   {
     tabTitle :'React 19',
     frameWorkName:'react',
    tabContent :'<p class="alert alert-info mb-0"><strong>React</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?</p>'
     },
    {
    tabTitle :'Vue 20',
     frameWorkName:'vue',
     tabContent :'<p class="alert alert-info mb-0"><strong>Vue</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?</p>'
   },
   ]
    
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(val:string){
    console.log(val)
    this.selectedFrameWork=val
  }
}
