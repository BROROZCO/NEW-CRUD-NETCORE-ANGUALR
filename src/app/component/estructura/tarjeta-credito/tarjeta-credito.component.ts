import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    {titulo: 'Juan Perez', numTarjeta: '4512369874', fechaExpiracion:'11/12', cvv:'123'},
    {titulo: 'Pedro Tellez', numTarjeta: '78784616846', fechaExpiracion:'09/24', cvv:'321'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
