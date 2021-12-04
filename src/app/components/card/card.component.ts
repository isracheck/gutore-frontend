import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: any;
  @Input() date: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.date);
    console.log(this.item);
  }

  reservar( item: any ) {
    let negocioId = item.idCompany;

 
    this.router.navigate([ '/reserva/', negocioId ,this.date]);

  }

}
