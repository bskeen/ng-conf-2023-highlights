import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StatusComponent, TimerComponent],
})
export class SharedModule {}
