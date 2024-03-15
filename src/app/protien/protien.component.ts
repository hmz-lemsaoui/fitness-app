import { Component, inject } from '@angular/core';
import { Protien } from '../_core/data/protien';
import { ProtienService } from '../_core/service/protien.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'mg-protien',
  templateUrl: './protien.component.html',
  styleUrl: './protien.component.scss',
})
export class ProtienComponent {
  private readonly protienService = inject(ProtienService);
  protiens!: Protien[];

  ngOnInit(): void {
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
        // console.log(data);
        this.protiens = data;
      });
  }
}
