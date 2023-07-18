import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { searchRoutes } from './movie-search.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSearch from './+state/search.reducer';
import { SearchEffects } from './+state/search.effects';
import { SearchComponent } from './search/search.component';
import { SearchGridComponent } from './search-grid/search-grid.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    StoreModule.forFeature(
      fromSearch.SEARCH_FEATURE_KEY,
      fromSearch.searchReducer
    ),
    EffectsModule.forFeature([SearchEffects]),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchComponent, SearchGridComponent],
})
export class MovieSearchModule {}
