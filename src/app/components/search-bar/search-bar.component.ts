import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  
  searchUpdate = new Subject<string>();
  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();
  ref: Subscription = null;

  constructor() {
    this.searchUpdate.asObservable().pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe(value => this.searchChanged.emit(value)); 
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (!!this.ref) {
      this.ref.unsubscribe();
    }
  }

  search(t: string) {
    this.searchUpdate.next(t);
  }
}
