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

}
