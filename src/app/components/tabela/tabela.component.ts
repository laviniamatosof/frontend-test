import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Pagamentos {
  numeroTransacao: number;
  dataPagamento: Date;
  descricaoPagamento: string;
  valor: number;
  tipoTransacao: string;
}

const ELEMENT_DATA: Pagamentos[] = [
  {
    numeroTransacao: 1,
    descricaoPagamento: 'Conta de Energia',
    dataPagamento: new Date(2022, 7, 2),
    valor: 123.6,
    tipoTransacao: 'Débito',
  },
  {
    numeroTransacao: 2,
    descricaoPagamento: 'Conta de Água',
    dataPagamento: new Date(2022, 7, 3),
    valor: 50.6,
    tipoTransacao: 'Débito',
  },
  {
    numeroTransacao: 3,
    descricaoPagamento: 'Bônus',
    dataPagamento: new Date(2022, 7, 4),
    valor: 200.3,
    tipoTransacao: 'Crédito',
  },
];

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  displayedColumns: string[] = [
    'numeroTransacao',
    'tipoTransacao',
    'descricaoPagamento',
    'valor',
    'dataPagamento',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit() {}
}
