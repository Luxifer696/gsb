import { Injectable } from '@angular/core';
import { ItemInterface } from 'src/model/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  private data:ItemInterface []=[
    {id: 0, name: 'test0', description: 'voilà', link: ''},
    {id: 1, name: 'test1', description: 'voilà', link: ''},
    {id: 2, name: 'test2', description: 'voilà', link: ''},
    {id: 3, name: 'test3', description: 'voilà', link: ''},
    {id: 4, name: 'test4', description: 'voilà', link: ''}
  ];

  constructor() { }

  getListData():ItemInterface[]{
    return this.data;
  }
}
