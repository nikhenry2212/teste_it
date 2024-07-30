import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatProgressBarModule,MatCardModule,MatChipsModule,MatButtonModule,CommonModule],
  providers: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products: any

  constructor(public product: ProductService) {

  }
deleteProduct(id: any){
  console.log(id);

  this.product.deleteProduct(id).subscribe((data)=> {
    console.log(data);
    console.log(id);


  })
}
  ngOnInit(): void {
    this.product.getProduct().subscribe((res: any)=> {
      this.products = res
      console.log(this.products);

    })
  }
}
