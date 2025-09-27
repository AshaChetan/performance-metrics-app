import { Component, Input, } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart-widget.html',
  styleUrls: ['./chart-widget.scss']
})
export class ChartWidget {
 @Input() chartOptions: ChartConfiguration<'bar'>['options'] | undefined;
 @Input() chartData: ChartConfiguration<'bar'>['data'] | undefined;
 @Input() title = '';
}
