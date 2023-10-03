import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-pr',
  templateUrl: './header-pr.component.html',
  styleUrls: ['./header-pr.component.css']
})
export class HeaderPrComponent {
  @Input() tituloHeader!: string;
}
