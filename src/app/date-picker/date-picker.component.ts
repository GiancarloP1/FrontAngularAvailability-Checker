import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  

@Component({
  standalone: true,
  selector: 'app-date-picker',  
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  imports: [FormsModule]  
})
export class DatePickerComponent {
  selectedStartDate: string = '';  // Fecha de inicio seleccionada
  selectedEndDate: string = '';    // Fecha de finalización seleccionada



  // Datos de prueba para las habitaciones
  rooms = [
    {
      room: 'Room 101',
      type: 'Single',
      availableFrom: '2024-10-07',
      availableUntil: '2024-10-15',
    },
    {
      room: 'Room 102',
      type: 'Double',
      availableFrom: '2024-10-10',
      availableUntil: '2024-10-20',
    },
    {
      room: 'Room 201',
      type: 'Suite',
      availableFrom: '2024-10-08',
      availableUntil: '2024-10-18',
    },
  ];
}
