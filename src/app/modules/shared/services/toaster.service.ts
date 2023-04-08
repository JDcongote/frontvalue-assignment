import { Injectable } from '@angular/core';
import { ToastMessage, ToastType } from '../typings';
import { BehaviorSubject, Observable, Subscription, delay, of, take, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private timeoutSub!: Subscription;
  private currentToast$: BehaviorSubject<ToastMessage | null> =
    new BehaviorSubject<ToastMessage | null>(null);

  public getCurrentToast$(): Observable<ToastMessage | null> {
    return this.currentToast$.asObservable();
  }

  public showToast(type: ToastType, message: string) {
    this.currentToast$.next({type,message});
    // set timeout to autoclose toaster
    this.timeoutSub && this.timeoutSub.unsubscribe();
    this.timeoutSub = this.currentToast$.asObservable().pipe(delay(3000),take(1)).subscribe(_ => this.dismiss());
  }

  public dismiss() {
    this.currentToast$.next(null);
  }
}
