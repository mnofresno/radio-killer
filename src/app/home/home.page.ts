import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  reset() {
    window['ShellExec'].exec("su -c '/bin/pkill -u radio'", (res) => {
      console.log('Reset response: ', res);
    });
  }
}
