import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { UnrelatedComponent } from './unrelated/unrelated.component';
import { MultidirectionalDataComponent } from './multidirectional-data/multidirectional-data.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ChildOneComponent } from './siblings/child-one/child-one.component';
import { ChildTwoComponent } from './siblings/child-two/child-two.component';
import { ParentDirective } from './siblings/parent.directive';
import { SiblingsDirective } from './siblings/siblings.directive';
import { ToastComponent } from './unrelated/toast/toast.component';
import { MultichildComponent } from './multidirectional-data/multichild/multichild.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    SiblingsComponent,
    UnrelatedComponent,
    MultidirectionalDataComponent,
    ChildComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentDirective,
    SiblingsDirective,
    ToastComponent,
    MultichildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
