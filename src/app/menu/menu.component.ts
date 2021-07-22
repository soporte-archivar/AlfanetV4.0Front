import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  toolbar!:MatToolbar;
  opened=false;

  constructor(private observer: BreakpointObserver){}
  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
       
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

 //   ngOnInit(): void {
 //   }

}
