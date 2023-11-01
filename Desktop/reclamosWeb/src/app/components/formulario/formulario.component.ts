import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formularioReclamo!: FormGroup;
  formularios: any;

  formularioSuministro!:FormGroup;


  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioReclamo = this.fb.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      direccion: [''],
      localidad: [''],
      codigoPostal: [''],
      telefono: [''],
      direccionAlternativa: [''],
      localidadAlternativa: [''],
      codigoPostalAlternativo: [''],
      email: [''],
      errorFacturacion: [false],
      resarcimiento: [false],
      suspencionSuministro: [false],
      malaAtencionComercial: [false],
      negativaConexion: [false],
      inconvenienteTension: [false],
      descripcion: ['']
    });
  }

  onSubmit() {
    // Aquí irá la lógica para manejar el envío del formulario
    // Puedes acceder a los valores del formulario usando this.formularioReclamo.value
    // Por ejemplo:
    const formValues = this.formularioReclamo.value;
    console.log(formValues);
  }
}
