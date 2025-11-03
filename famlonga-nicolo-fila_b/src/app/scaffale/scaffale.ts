import { Component } from '@angular/core';
import { Cassetta } from '../cassetta/cassetta';

@Component({
  selector: 'app-scaffale',
  imports: [Cassetta],
  templateUrl: './scaffale.html',
  styleUrl: './scaffale.css',
})
export class Scaffale {
  lista =["cassetta frutta","cassetta dolci","cassetta carne","cassetta verdure","cassetta frutta secca"]
}
