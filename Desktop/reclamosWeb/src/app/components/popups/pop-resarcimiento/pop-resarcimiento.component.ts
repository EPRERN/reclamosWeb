import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pop-resarcimiento',
  templateUrl: './pop-resarcimiento.component.html',
  styleUrls: ['./pop-resarcimiento.component.css']
})
export class PopResarcimientoComponent {

  downloading = false; // Agregar una variable para rastrear el estado de descarga


  constructor(public dialogRef: MatDialogRef<PopResarcimientoComponent>) {}

  
  closeModal() {
    this.dialogRef.close();
  }



  downloadAsPDF() {
    this.downloading = true; // Cambiar el estado a "descargando" al hacer clic en el botón


    const pdf = new jspdf.default();
    const content = this.pdfContent.nativeElement;

    html2canvas(content, {
      scale: 2,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight - 20);
      pdf.save('reclamo.pdf');

      this.downloading = false; // Cambiar el estado a "no descargando" después de completar la descarga
  
    });
  }

  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;


  
}

