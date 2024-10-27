import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrilldownPageComponent } from './drilldown-page.component';

const routes: Routes = [{ path: '', component: DrilldownPageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DrilldownPageComponent
  ],
})
export class DrilldownPageModule {}
