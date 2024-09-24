import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'budget-Planer', loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)}
];
