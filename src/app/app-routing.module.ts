import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { UnrelatedComponent } from './unrelated/unrelated.component';
import { MultidirectionalDataComponent } from './multidirectional-data/multidirectional-data.component';

const routes: Routes = [
  { path: 'parentToChild', component: ParentToChildComponent },
  { path: 'siblings', component: SiblingsComponent },
  { path: 'unrelated', component: UnrelatedComponent },
  { path: 'multi-directional', component: MultidirectionalDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
