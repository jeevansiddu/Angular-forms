import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sfc',
  templateUrl: './sfc.component.html',
  styleUrls: ['./sfc.component.css']
})
export class SfcComponent implements OnInit {
  uname="admin";
  pass="123";
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){
    if(this.uname!="" && this.pass!=""){
      alert("Form filled");
    }
    else {
      alert("Form not filled")
    }
  }

}
