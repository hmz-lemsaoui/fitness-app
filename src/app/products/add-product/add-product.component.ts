import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsComponent } from '../products.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProtienService } from '../../_core/service/protien.service';

@Component({
  selector: 'mg-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ProductsComponent>) {}

  private readonly proteinService = inject(ProtienService);
  ProteinForm!: FormGroup;

  ngOnInit() {
    this.ProteinForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  AddNewProtein() {
    if (this.ProteinForm.invalid) return;

    // send the login form
    this.proteinService.create(this.ProteinForm.value).then(() => {
      this.dialogRef.close();
    });
  }
}
