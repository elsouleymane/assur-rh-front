import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

// Index Xomponent
export class IndexComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {

    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Tableau de bords', active: true },
      { label: 'Tableau de bords', active: true }
    ];

  }
}