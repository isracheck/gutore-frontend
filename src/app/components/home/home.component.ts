import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private companiesService: CompaniesService,
    private datepipe: DatePipe) {

  }

  negocios: any[] = [];

  ngOnInit(): void {
    this.buscar("");
   
    this.myForm = new FormGroup({
      'presentDate': new FormControl((new Date()).toISOString().substring(0,10)),
    });

  }

  buscar(termino: string) {


    this.companiesService.getCompanies(termino)
      .subscribe((data: any) => {
        this.negocios = data;
      });

  }

}
