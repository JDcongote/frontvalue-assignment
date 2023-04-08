import { Component } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';
import { ToastMessage } from '../../typings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  protected toast$!: Observable<ToastMessage | null>;
  constructor(private toasterService: ToasterService){}
  
  ngOnInit(){
    this.toast$ = this.toasterService.getCurrentToast$();
  }

  protected dismiss(){
    this.toasterService.dismiss();
  }

}
