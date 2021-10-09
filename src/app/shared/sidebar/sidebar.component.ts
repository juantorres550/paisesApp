import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  routes = [
    {path: '', name: 'Por pais'},
    {path: 'region', name: 'Por Region'},
    {path: 'capital', name: 'Por Capital'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
