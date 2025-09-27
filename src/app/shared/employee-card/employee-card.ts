import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../../core/models/employee.model';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.html',
  styleUrls: ['./employee-card.scss']
})
export class EmployeeCard {
  @Input() employee: Employee | null = null;
}
