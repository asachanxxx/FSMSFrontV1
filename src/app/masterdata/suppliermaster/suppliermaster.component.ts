import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliermaster',
  templateUrl: './suppliermaster.component.html',
  styleUrls: ['./suppliermaster.component.css']
})
export class SuppliermasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Onsubmitx(e){
    console.log(e);
  }

}
