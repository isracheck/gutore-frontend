import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) {
    console.log('Companies Service Listo');
    
  }



  getQuery( query: string ) {

    const url = `http://localhost:8080/api/companies/findCompanyByName/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsnU8IhPdDKrUXuWq7FVMlrNmZrmMJiSyG6fRESINYgAJBBpnLiQ6GThLMuQsxqlLJVavErt4qQAgzvrA'
    });

    return this.http.get(url, { headers });

  }

  getCompanies( termino: string ) {

    return this.getQuery(`${ termino }`)
                .pipe( map( data => data));

  }

}
