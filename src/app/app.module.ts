import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgifComponent } from './ng-if.component';
import { SimpleComponent } from './simple/simple.component';
import { ContextComponent } from './context/context.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-parent/input-child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NgifComponent,
    SimpleComponent,
    ContextComponent,
    InputParentComponent,
    InputChildComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
