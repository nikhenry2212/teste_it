import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    // BrowserModule,
    RouterLink,
    MatInputModule,
    // MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    CommonModule],
  providers: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products: any
  selectedProduct: any = null;
  selectedIsProduct = false
  productForm!: FormGroup;

  constructor(
    public product: ProductService,
    public fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {

  }





  deleteProduct(id: any) {
    console.log(id);

    this.product.deleteProduct(id).subscribe((data) => {
      console.log(data);
      document.location.reload();
    }, err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    })
  }

  onEdit(product: any) {
    console.log(product);
    this.selectedIsProduct = true;
    this.selectedProduct = product;
    this.productForm.patchValue(product);
  }


  onUpdate() {
    if (this.productForm.valid) {
      const updatedProduct = this.productForm.value;
      this.product.updateProduct(updatedProduct.id, updatedProduct).subscribe(
        () => {
          this.products = this.products.map((product: any) =>
            product.id === updatedProduct.id ? updatedProduct : product
          );
          this.snackBar.open('Produto atualizado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.selectedProduct = null;
          this.selectedIsProduct = false
        },
        error => {
          console.error('Erro ao atualizar produto', error);
          this.snackBar.open('Erro ao atualizar produto', 'Fechar', {
            duration: 3000
          });
        }
      );
    }
  }
  ngOnInit(): void {
    this.product.getProduct().subscribe((res: any) => {
      this.products = res
      console.log(this.products);

    })

    this.productForm = this.fb.group({
      id: [null],
      productName: ['', Validators.required],
      enumaration: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern(/^\d*\.?\d{0,3}$/)]],
      productPerishable: ['', Validators.required],
      validyDate: ['', Validators.required],
      dateManufacturing: ['', Validators.required]
    });

  }
}
