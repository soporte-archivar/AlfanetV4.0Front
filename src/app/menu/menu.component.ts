import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbar } from '@angular/material/toolbar';
import { Administracion, Ayuda, Consultas, Documentos, Inicio, Prestamos, Reportes, WorkFlow } from 'src/constantes/menu.const';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @ViewChild(MatSidenav)
  
  step = 0;
  panelOpenState = false;
  sidenav!: MatSidenav;
  toolbar!: MatToolbar;
  opened = false;
  administracion: any[] = [];
  inicio: any[] = [];
  documentos: any[] = [];
  workFlow: any[] = [];
  reportes: any[] = [];
  consultas: any[] = [];
  prestamos: any[] = [];
  ayuda: any[] = [];

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.callMenuList();
  }

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

  callMenuList() {

    this.administracion = Administracion;
    this.inicio = Inicio;
    this.documentos = Documentos;
    this.workFlow = WorkFlow;
    this.reportes = Reportes;
    this.consultas = Consultas;
    this.prestamos = Prestamos;
    this.ayuda = Ayuda;
  }

}
