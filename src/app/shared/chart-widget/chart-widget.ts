import { Component, Input, } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-widget.html',
  styleUrls: ['./chart-widget.scss']
})
export class ChartWidget {
 @Input() chartData: ChartConfiguration<'bar'>['data'] | null = null;
  @Input() chartOptions: ChartConfiguration<'bar'>['options'] | null = null;
}
