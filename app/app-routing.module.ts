import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RfcComponent } from './rfc/rfc.component';
import { SfcComponent } from './sfc/sfc.component';

const routes: Routes = [
  {
    path: 'sfc',
    component: SfcComponent
  },
  {
    path: 'rfc',
    component: RfcComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
