import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  nombre: string = "";
  compradores: number = 0;
  ticketsCantidad: number = 0;
  validacionToF: String = "";
  tarjetacineco: boolean = false;
  descuento: number = 0;
  descuento2: number = 0;
  ticketPrecio: number = 12;
  total: number = 0;
  compraExtra: boolean = false;
  error: boolean = false;



  cinecoResult(result: boolean): void {
    this.tarjetacineco = result;
  }

  calculo(): void {

    if (this.ticketsCantidad > 5) {
      this.descuento = 0.85;
    } else if (this.ticketsCantidad == 3 || this.ticketsCantidad == 4 || this.ticketsCantidad == 5) {
      this.descuento = 0.90;
    } else {
      this.descuento = 0;
    }
    if (this.tarjetacineco == true) {
      this.descuento2 = 0.90;
    }
    else {
      this.descuento2 = 0;
    }


    if (this.ticketsCantidad <= (this.compradores * 7)) {
      this.total = this.ticketPrecio * this.ticketsCantidad
      this.compraExtra = true;
      this.error = false;;
      if (this.descuento != 0) {
        this.total = this.descuento * this.total;
      }

    } else {
      this.error = true;
      this.compraExtra = false;
      this.total =0;
    }



    if (this.descuento2 != 0) {
      this.total = this.descuento2 * this.total;
    }


  }
  ngOnInit(): void {
  }
}