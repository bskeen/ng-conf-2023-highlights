import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { searchGridActions } from './search-grid.actions';
import { Movie } from '../+state/search.models';
import { EMPTY, Observable } from 'rxjs';
import { searchSelectors } from '../+state/search.selectors';

@Component({
  selector: 'ng-conf-highlights-search-grid',
  templateUrl: './search-grid.component.html',
  styleUrls: ['./search-grid.component.scss'],
})
export class SearchGridComponent implements OnInit {
  form: FormGroup = this._fb.group({
    searchText: ''
  });

  movies$: Observable<Movie[]> = EMPTY;

  constructor(private _fb: FormBuilder, private _store: Store) {}

  ngOnInit(): void {
      this.movies$ = this._store.select(searchSelectors.selectSearchResults);
  }

  onSubmitSearch(): void {
    const searchText = this.form.value.searchText as string;

    this._store.dispatch(searchGridActions.searchSubmitted({ searchText }));
  }
}
