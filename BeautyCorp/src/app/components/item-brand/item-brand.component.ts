import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-brand',
  templateUrl: './item-brand.component.html',
  styleUrls: ['./item-brand.component.scss']
})
export class ItemBrandComponent implements OnInit {

  ourBrands:any=[{brand:'ÉSIKA',img:'../../../assets/img/esika1.jpg',about:'¡ Mi expresión, mi elección ! Tenemos la libertad de elegir lo que queremos ser y expresarlo al mundo sin miedo. Ser nosotras mismas es lo mejor que podemos elegir. Todas las mujeres somos diferentes y creemos en la belleza de cada una de ellas.',textButton:'conoce mas de nosotros'},
                {brand:'L´BEL',img:'../../../assets/img/lbel1.jpg',about:'¡ Belleza a prueba de emociones ! En L’Bel creemos que nunca eres tan bella como cuando te permites vivir al máximo. Nuestros productos están hechos a prueba de emociones porque queremos que te veas, sientas y vivas bella, siempre.',textButton:'conoce mas de nosotros'},
                {brand:'CYZONE',img:'../../../assets/img/cyzone1.jpg',about:'¡ Atrévete e inspira ! En CYZONE se valora el estilo personal y se potencializa sus cualidades, siéntete bella y fresca siempre. Atrévete a usar nuestros productos y luce con orgullo tu brillo personal.',textButton:'conoce mas de nosotros'}]

  constructor() { }

  ngOnInit(): void {
  }

}
