import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from './directives/highlight.directive';

const MatModules = [MatCardModule, MatButtonModule, MatIconModule];

const Directives = [HighlightDirective];

@NgModule({
  declarations: [...Directives],
  imports: [CommonModule],
  exports: [...MatModules, ...Directives],
})
export class SharedModule {}
