import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tfc',
  templateUrl: './tfc.component.html',
  styleUrls: ['./tfc.component.css']
})
export class TfcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(form)
    // if(form.uname=='')
    if(form.value.uname!="" && form.value.pass!=""){
      alert("Done");
    }
    else alert("FILL the form")
  }

}
