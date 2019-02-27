import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Log } from '../app.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  log = []
  date: number;
  constructor() { }

  addLog(form: NgForm) {
    const key = Math.random().toString(36).substr(2, 5);
    const data = form.value
    this.log.push(data);
    this.date = Date.now()
    console.log(data)
    form.reset();
  }

  deleteLog(index) {
    this.log.splice(index, 1);
  }
  ngOnInit() {
   
  }

}
