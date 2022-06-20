import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnInit {
  @ViewChild('grafico', { static: true }) elemento: ElementRef =
    {} as ElementRef;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    new Chart(this.elemento?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            data: [
              15339, 21345, 18483, 24003, 23489, 24092,
            ],
            backgroundColor: 'transparent',
            borderColor: '#673ab7',
            borderWidth: 4,
            pointBackgroundColor: '#673ab7',
            label: '2022',
          },
          {
            data: [
              32132, 4562, 8520, 12450, 6598, 2301, 54120, 9875, 32185, 6846, 51651, 2304
            ],
            backgroundColor: 'transparent',
            borderColor: '#98c548',
            borderWidth: 4,
            pointBackgroundColor: '#98c548',
            label: '2021',
          },
          {
            data: [
              1244, 12414, 7562, 4530, 1560, 3205, 6546, 8790, 8765, 32065, 51651, 32153
            ],
            backgroundColor: 'transparent',
            borderColor: '#ff8c00',
            borderWidth: 4,
            pointBackgroundColor: '#ff8c00',
            label: '2020',
          },
          {
            data: [
              5420, 8734, 4535, 34043, 9468, 12345, 64250, 14203, 14202, 3056, 50850, 3218
            ],
            backgroundColor: 'transparent',
            borderColor: '#20b2aa',
            borderWidth: 4,
            pointBackgroundColor: '#20b2aa',
            label: '2019',
          },
          {
            data: [
              10642, 30106, 45874, 62070, 34051, 3404, 8750, 30468, 10424, 30560, 51651,32155
            ],
            backgroundColor: 'transparent',
            borderColor: '#78866b',
            borderWidth: 4,
            pointBackgroundColor: '#78866b',
            label: '2018',
          },
        ],
      },
    });
  }
}
