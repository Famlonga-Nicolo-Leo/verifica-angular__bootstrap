import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cassetta',
  imports: [],
  templateUrl: './cassetta.html',
  styleUrl: './cassetta.css',
})
export class Cassetta  {
  @Input() cassetta!: string;
  lista = ["mela,", "banana,", "arancia,"];

  ngOnInit() {}
}
