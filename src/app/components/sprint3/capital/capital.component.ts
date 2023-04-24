import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Transaction } from 'src/app/models/stock-exchange.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent  {

  breadcrumbItems: MenuItem[];

  transactions: Transaction[]

  loading: boolean = true;

  capitalOverview: any;

  capitalTableValues: string[];

  status!: any[];

  constructor(private router: Router) {

  }


  ngOnInit() {
    this.breadcrumbItems = [
      {label: 'Početna', routerLink: ['/home']},
      {label: 'Porudžbine', routerLink: ['/purchases']}
    ];

    this.status = [
      {label: 'Sve', value: ''},
      {label: 'Završene', value: 'ZAVRSENA'},
      {label: 'Odobrene', value: 'ODOBRENA'},
      {label: 'Odbijene', value: 'ODBIJENA'},
      {label: 'Na čekanju', value: 'NA CEKANJU'}
    ]

    this.capitalOverview = [
      { type: 'AKCIJA', total: '$0' },
      { type: 'FUTURE_UGOVOR', total: '$0' }
    ];

  }

  
  
  onCapitalRowClick(type: string) {
    if (type === 'AKCIJA') {
      this.router.navigate(['/stocks-table/sell']);
    } else if (type === 'FUTURE_UGOVOR') {
      this.router.navigate(['/future-contract']);
    }
  }


  refresh() {

    //TODO ovde ide logika i poziv na servis koji ce pozvati refresh i resetovati tabelu na berza mode
    //I odmah za njim i filtriranje za userove hartije
    // this.loading = true;
    // this.stocks-table = []
    // setTimeout(()=>{
    //   this.insertUsers()
    //   this.BuySellOption = true
    //   this.switch = false
    //   this.loading = false
    // }, 2000);

  }


}

