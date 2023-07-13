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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    StoreModule.forFeature(
      fromSearch.SEARCH_FEATURE_KEY,
      fromSearch.searchReducer
    ),
    EffectsModule.forFeature([SearchEffects]),
  ],
  declarations: [SearchComponent, SearchGridComponent],
})
export class MovieSearchModule {}
