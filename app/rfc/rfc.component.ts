import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-rfc',
  templateUrl: './rfc.component.html',
  styleUrls: ['./rfc.component.css']
})
export class RfcComponent implements OnInit {
  myform = new FormGroup({
    uname: new FormControl(),
    pass: new FormControl(),
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSub(){
    if(this.myform.value.uname=="jeevan" && this.myform.value.pass=="123"){
      alert("reg success");
      }
      else{
      alert("Failed");
      }
  }
  get uname(){
    return this.myform.get("uname")
  }
  get pass(){
    return this.myform.get("pass");
  }
}
