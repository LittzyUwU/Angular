import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit{
  
  constructor() { 
  this.totalA = [

  ];
}

  ngOnInit(): void{
  }
  
  total:number=0;
  totalA:string[];
  res:string[];
  num;

  tablaMulti():void{
    for(let i=1; i<11; i++){
      this.totalA[i] = (`${this.num} x ${i} =${i*this.num}`+"\n")
    }
  }
  }
  

