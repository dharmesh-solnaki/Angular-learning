import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(val, containerId){
    let el = document.createElement('li');
    el.innerText = val;
    
    document.getElementById(containerId).appendChild(el);
   }
}
