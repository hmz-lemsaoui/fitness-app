import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Protien } from '../_core/data/protien';
import { ProtienService } from '../_core/service/protien.service';
import { tap, map } from 'rxjs';

@Component({
  selector: 'mg-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'image',
    'actions',
  ];
  dataSource!: MatTableDataSource<Protien>;

  private readonly protienService = inject(ProtienService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.retrieveProteins();
  }

  retrieveProteins(): void {
    this.protienService
      .getAll()
      .snapshotChanges()
      .pipe(
        tap((x) => console.log(x)),
        map((changes) =>
          changes.map((c) => {
            console.log(c.payload.doc.data());
            return {
              id: c.payload.doc.id,
              ...c.payload.doc.data(),
            };
          })
        )
      )
      .subscribe((data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<Protien>(data);
        this.dataSource.paginator = this.paginator;
      });
  }
}
