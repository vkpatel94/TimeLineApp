import { Component, OnInit, Query } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Log } from '../app.model';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  logs = [] 
  constructor() { }

  addLog(form: NgForm) {
    const key = Math.random().toString(36).substr(2, 5);
    let date;
    let data = form.value
    data.date = Date.now();
    localStorage.setItem(key, JSON.stringify(data));
    this.logs.push(JSON.parse(localStorage.getItem(key))); 
    form.reset();
  }

  deleteLog(index) {
    var answer = confirm("Do you want to delete this log?")
    if (answer) {
        this.logs.splice(index, 1);
    }
    else {}
  }

  blue(index) {
    var x = <any>document.getElementById("changeCSS");
    x.getElementsByClassName("card")[index].style.backgroundColor = "#37b8df";
    console.log("something");
  }

  brown(index) {
    var x = <any>document.getElementById("changeCSS");
    x.getElementsByClassName("card")[index].style.backgroundColor = "#da9b66";
    console.log("something");
  }

  red(index) {
    var x = <any>document.getElementById("changeCSS");
    x.getElementsByClassName("card")[index].style.backgroundColor = "#ff471a";
    console.log("something");
  }

  green(index) {
    var x = <any>document.getElementById("changeCSS");
    x.getElementsByClassName("card")[index].style.backgroundColor = "#00e600";
    console.log("something");
  }

  yellow(index) {
    var x = <any>document.getElementById("changeCSS");
    x.getElementsByClassName("card")[index].style.backgroundColor = "#FFD700";
    console.log("something");
  }

  ngOnInit() {}

}
