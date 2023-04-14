import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MatModules = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MatModules],
  exports: [...MatModules],
})
export class SharedModule {}
