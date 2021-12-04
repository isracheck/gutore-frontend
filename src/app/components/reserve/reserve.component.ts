import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reserveId: any;
  reserveDate: any;

  constructor( private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.activatedRoute.params.subscribe(params => {
      if (params.reserveId !== undefined) {
        this.reserveId = params.reserveId;
        this.reserveDate = params.reserveDate;
      }
    });

  }

  ngOnInit(): void {
    
  }

}
