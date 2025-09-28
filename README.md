# Performance Metrics App

A modular Angular application to display and manage employee performance metrics using charts, forms, and reusable components. This project uses **RxJS Observables** and **Angular Signals** for state management, with a clean modular structure.

---

## **Table of Contents**
1. [Project Setup](#project-setup)
2. [Architecture & Design Decisions](#architecture--design-decisions)
3. [Modules & Components](#modules--components)
4. [State Management & Services](#state-management--services)
5. [Testing Strategy](#testing-strategy)
6. [Jira Task Breakdown](#jira-task-breakdown)

---

## **Project Setup**

### 1. Clone the repository
bash
    git clone https://github.com/AshaChetan/performance-metrics-app.git
    cd performance-metrics-app

### . Install dependencies
    npm install
### . Run the application
    ng serve
    Open your browser at http://localhost:4200

### . Run unit tests with coverage
    ng test --code-coverage

### 3. | Module    | Components & Features                                   |
| --------- | ------------------------------------------------------- |
| Dashboard | Chart, Employee Form, Employee Cards, Dynamic Updates   |
| Reports   | Aggregated Charts, Filtering using RxJS streams         |
| Settings  | App Configuration, Theme Toggle, Optional Employee Form |


### 4. Architecture & Design Decisions

Modular Structure: Feature modules for Dashboard, Reports, and Settings.
Standalone Components: EmployeeFormComponent, EmployeeCardComponent, ChartWidgetComponent.
State Management: BehaviorSubject + Angular Signals.
Data Handling: Mock backend data simulated using services with Observable and tap.
Styling: SCSS with variables, supports light/dark theme toggling.
Charting: Chart.js via a reusable chart component.

### State Management & Services

PerformanceService: Manages employees data, computes averages by role, adds new employees.
ThemeService: Manages dark/light theme using Angular Signals.
Signals and Observables are used to automatically update the UI when data changes.

### Testing Strategy:
Service Tests: PerformanceService and ThemeService are tested for:
Data fetching & adding employees
Error handling (catchError)
Signal/Observable updates
Form Component Tests: EmployeeFormComponent
Validation rules
Submit events
Tools: Jasmine + Karma
Commands:
ng test  # Run all tests
ng test --code-coverage  # Run tests with coverage report