import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';

@Component({
  standalone: true,  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DatePickerComponent]  
})
export class AppComponent {
  standalone =  true; 
  selectedStartDate: string = '';  
  selectedEndDate: string = '';    

  // Datos de prueba para las habitaciones
  rooms = [
    { room: 'Room 101', type: 'Single', availableFrom: '2024-10-07', availableUntil: '2024-10-15' },
    { room: 'Room 102', type: 'Double', availableFrom: '2024-10-10', availableUntil: '2024-10-20' },
    { room: 'Room 201', type: 'Suite', availableFrom: '2024-10-08', availableUntil: '2024-10-18' }
  ];
}
