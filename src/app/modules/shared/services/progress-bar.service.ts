import { Injectable } from '@angular/core';
import { ProgresBarModel } from '../typings';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private status$: BehaviorSubject<ProgresBarModel> =
    new BehaviorSubject<ProgresBarModel>({ current: 0, total: 0 });


  public initialize(model: ProgresBarModel) {
    this.status$.next(model);
  }

  public getStatus$(): Observable<ProgresBarModel> {
    return this.status$.asObservable();
  }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  public updateProgress(current: number) {
    if (!this.loading$.getValue()) {
      this.loading$.next(true);
    }

    this.status$.next({ current, total: this.status$.getValue()?.total });

    if (this.status$.getValue()?.total === current) {
      // loading done
      this.loading$.next(false);
    }
  }
}
