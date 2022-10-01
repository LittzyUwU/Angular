import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent{

  constructor() { }

  ngOnInit(): void {
  }

  total:number=0;
  maxBoletos:number=7;
  des:number=0;
  error:string;

  comprador;
  nombre;
  boletos;
  tarjetaSi;
  tarjetaNo;

  procesar(){
      if(this.comprador==1){
          this.maxBoletos=7;
          if(this.boletos<=2)
        {
          if(this.tarjetaSi){
            this.total=this.total-(this.total*0.10);
          }
        }
        else if(this.boletos>=3 && this.boletos<=5)
        {
          this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
          if(this.tarjetaSi){
            this.total=this.total-(this.total*0.10);
          }
        }
        else if(this.boletos>=6 && this.boletos<=7){
          this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
          if(this.tarjetaSi){
            this.total=this.total-(this.total*0.10);
          }
        }
      }


      if(this.comprador==2){
        this.maxBoletos=7*2;
        if(this.boletos<=2)
      {
        if(this.tarjetaSi){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=3 && this.boletos<=5)
      {
        this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
        if(this.tarjetaSi){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=6 && this.boletos<=14){
        this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
        if(this.tarjetaSi){
          this.total=this.total-(this.total*0.10);
        }
      }
    }


    if(this.comprador==3){
      this.maxBoletos=7*3;
      if(this.boletos<=2)
    {
      if(this.tarjetaSi){
        this.total=this.total-(this.total*0.10);
      }
    }
    else if(this.boletos>=3 && this.boletos<=5)
    {
      this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
      if(this.tarjetaSi){
        this.total=this.total-(this.total*0.10);
      }
    }
    else if(this.boletos>=6 && this.boletos<=21){
      this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
      if(this.tarjetaSi){
        this.total=this.total-(this.total*0.10);
      }
    }
  }


  if(this.comprador==4){
    this.maxBoletos=7*4;
    if(this.boletos<=2)
  {
    if(this.tarjetaSi){
      this.total=this.total-(this.total*0.10);
    }
  }
  else if(this.boletos>=3 && this.boletos<=5)
  {
    this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
    if(this.tarjetaSi){
      this.total=this.total-(this.total*0.10);
    }
  }
  else if(this.boletos>=6 && this.boletos<=28){
    this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
    if(this.tarjetaSi){
      this.total=this.total-(this.total*0.10);
    }
  }
}


if(this.comprador==5){
  this.maxBoletos=7*5;
  if(this.boletos<=2)
{
  if(this.tarjetaSi){
    this.total=this.total-(this.total*0.10);
  }
}
else if(this.boletos>=3 && this.boletos<=5)
{
  this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  if(this.tarjetaSi){
    this.total=this.total-(this.total*0.10);
  }
}
else if(this.boletos>=6 && this.boletos<=35){
  this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  if(this.tarjetaSi){
    this.total=this.total-(this.total*0.10);
  }
  }
}
else{
  this.error=(`Error no se puede mas de 5 compradores`);
}
        
    }
  }
 //this.totalA[i]= (`${this.numero} x ${i} = ${this.numero*i}`+"\n");    }