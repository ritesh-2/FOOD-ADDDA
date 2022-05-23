import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule  } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'

const material=[
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
