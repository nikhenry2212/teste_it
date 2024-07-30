import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReportsComponent } from '../../components/reports/reports.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [HeaderComponent, ReportsComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})


export class CreateComponent {

  constructor() {}

}
