import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwindDemo';

  toggle(){
    let htmlclasses=document.querySelector('html')?.classList;
    if(localStorage.theme=='dark'){
      htmlclasses?.remove('dark');
      localStorage.removeItem('theme');
    }
    else{
      htmlclasses?.add('dark');
      localStorage.theme='dark';
    }
  }
}
