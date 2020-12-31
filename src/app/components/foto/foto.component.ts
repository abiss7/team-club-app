import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {

  fotos = [
    'foto1.PNG', 'foto2.PNG', 'foto3.PNG', 'foto4.PNG'
  ];
  stickers = [
    'bernie-sticker.png',
    'ari-sticker.png',
    'andy-sticker.png',
    'kelly-sticker.png',
    'lucas-sticker.png',
    'marto-sticker.png',
    'meli-sticker.png',
    'nacho-sticker.png',
    'pablo-sticker.png',
    'rodo-sticker.png',
    'rodri-sticker.png',
    'xime-sticker.png',
    'rodri2-sticker.png',
  ];

  constructor() { }

  ngOnInit(): void {

    this.fotos = this.fotos.map(foto => `assets/images/fotos/${foto}`);
    this.stickers = this.stickers.map(sticker => `assets/images/stickers/${sticker}`);
  }

}
