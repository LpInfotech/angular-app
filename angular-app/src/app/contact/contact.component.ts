import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  displayVal='';
  getValue(val:string){
    this.displayVal=val;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
