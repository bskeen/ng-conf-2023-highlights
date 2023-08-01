import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromViewStatus from './+state/view-status.reducer';
import { ViewStatusEffects } from './+state/view-status.effects';
import { ViewStatusComponent } from './view-status/view-status.component';
import { RouterModule } from '@angular/router';
import { viewStatusRoutes } from './view-status.routes';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromViewStatus.VIEW_STATUS_FEATURE_KEY,
      fromViewStatus.viewStatusReducer
    ),
    EffectsModule.forFeature([ViewStatusEffects]),
    RouterModule.forChild(viewStatusRoutes)
  ],
  declarations: [ViewStatusComponent],
})
export class ViewStatusModule {}
