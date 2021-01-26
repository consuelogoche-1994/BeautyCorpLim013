import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-brand',
  templateUrl: './item-brand.component.html',
  styleUrls: ['./item-brand.component.scss']
})
export class ItemBrandComponent implements OnInit {

  ourBrands:any=[{brand:'ÉSIKA',img:'https://firebasestorage.googleapis.com/v0/b/beautycorp013.appspot.com/o/imgUtils%2Fesika1.jpg?alt=media&token=befa91b3-9189-4a8f-9724-9979518e6401',about:'¡ Mi expresión, mi elección ! Tenemos la libertad de elegir lo que queremos ser y expresarlo al mundo sin miedo. Ser nosotras mismas es lo mejor que podemos elegir. Todas las mujeres somos diferentes y creemos en la belleza de cada una de ellas.',textButton:'conoce mas de nosotros'},
                {brand:'L´BEL',img:'https://firebasestorage.googleapis.com/v0/b/beautycorp013.appspot.com/o/imgUtils%2Flbel1.jpg?alt=media&token=5b84f6b4-14f1-4967-88b4-0c16f58f3fd2',about:'¡ Belleza a prueba de emociones ! En L’Bel creemos que nunca eres tan bella como cuando te permites vivir al máximo. Nuestros productos están hechos a prueba de emociones porque queremos que te veas, sientas y vivas bella, siempre.',textButton:'conoce mas de nosotros'},
                {brand:'CYZONE',img:'https://firebasestorage.googleapis.com/v0/b/beautycorp013.appspot.com/o/imgUtils%2Fcyzone1.jpg?alt=media&token=97ba7d9e-339d-4595-9322-d96a5b2134e1',about:'¡ Atrévete e inspira ! En CYZONE se valora el estilo personal y se potencializa sus cualidades, siéntete bella y fresca siempre. Atrévete a usar nuestros productos y luce con orgullo tu brillo personal.',textButton:'conoce mas de nosotros'}]

  constructor() { }

  ngOnInit(): void {
  }

}
