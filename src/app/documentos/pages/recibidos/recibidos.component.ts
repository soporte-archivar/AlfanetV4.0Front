import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.css']
})
export class RecibidosComponent implements OnInit {

   //Variables
   accion = "Insertar"
   listRadicados: any[] = [];
   id:number | undefined;

   form!: FormGroup;

  constructor(private fb:FormBuilder, private toastr: ToastrService,) { 
    this.form = this.fb.group({
      grupo: ['Radicados'],
      NumeroExt: [''],
      NumeroGuia: [''],
      FechaProced: ['', Validators.required],
      FechaVence: ['', Validators.required],
      Procedencia: ['', Validators.required],
      Detalle: ['', Validators.required],
      Naturaleza: ['', Validators.required],
      Medio: ['', Validators.required],
      Expediente:['', Validators.required],
      CargarA: ['', Validators.required],
      Accion: ['', Validators.required],
      Anexo: ['', Validators.required],
      EnterarA:['', Validators.required],

      titular: ['', Validators.required],
      numeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

    
  obtenerRadicados(){
    // this._RadicadoService.getListRadicados().subscribe(data =>{
    //   console.log(data);
    //   this.listRadicados = data;
    // },
    // error=>{
    //   console.log(error);
    // });
  }

  agregarRadicado(){
    this.accion = "Insertar";
    // const Radicado: any ={
    //   titular: this.form.get('titular')?.value,
    //   numeroRadicado: this.form.get('numeroRadicado')?.value,
    //   fechaExpiracion: this.form.get('fechaExpiracion')?.value,
    //   cvv: this.form.get('cvv')?.value,
    // }
    // if(this.id == undefined){
    //   // SE AGREGA Radicado
    //   this._RadicadoService.InsertRadicado(Radicado).subscribe( data =>{
    //     this.toastr.success('La Radicado fue registrada Exitosamente!', 'Radicado Registrada!');
    //     this.form.reset();
    //     this.obtenerRadicados();
  
    //   },error=>{
    //     this.toastr.error('Opps ocurrio un error', error);
    //     console.log(error);
    //   });
    // }
    // else{ //SE EDITA Radicado
    //     Radicado.id = this.id;
    //     this._RadicadoService.UpdateRadicado(this.id,Radicado).subscribe(data=>{
    //     this.form.reset();
    //     this.accion = 'Agregar';
    //     this.id = undefined;
    //     this.toastr.info('La Radicado ha sido actualizada satisfactoriamente','Radicado Actualizada');
    //     this.obtenerRadicados();
    //   },error=>{
    //     console.log(error);
    //   })
    // }  
  }


  EditarRadicado(Radicado:any){
    this.accion = "Editar";
    // console.log(Radicado);
    // this.id = Radicado.id;
    // this.form.patchValue({
    //   titular: Radicado.titular,
    //   numeroRadicado: Radicado.numeroRadicado,
    //   fechaExpiracion: Radicado.fechaExpiracion,
    //   cvv: Radicado.cvv
    // });

  }

}
