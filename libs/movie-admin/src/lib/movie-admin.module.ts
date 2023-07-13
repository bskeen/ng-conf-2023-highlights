import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAdmin from './+state/admin.reducer';
import { AdminEffects } from './+state/admin.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAdmin.ADMIN_FEATURE_KEY, fromAdmin.adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class MovieAdminModule {}
