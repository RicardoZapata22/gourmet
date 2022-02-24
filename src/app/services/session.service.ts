import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  @Output() sessionUpdate: EventEmitter<any> = new EventEmitter();

  private session: any;
  private dataName: string = 'session';

  constructor() {
    this.session = localStorage;
  }

  set(data:any) {
    this.session.setItem(this.dataName, this.IsJsonObject(data));
    this.sessionUpdate.emit(this.get());
  }

  get() {
    return this.IsJsonString(this.session.getItem(this.dataName));
  }

  clean() {
    this.session.removeItem(this.dataName);
    this.sessionUpdate.emit(this.get());
  }

  private IsJsonObject(data:any) {
      'use strict';
      try {
          return JSON.stringify(data);
      } catch (e) {
          return data;
      }
  }

  private IsJsonString(data:any) {
      'use strict';
      try {
          return JSON.parse(data);
      } catch (e) {
          return data;
      }
  }
}
