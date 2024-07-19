import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss'
})
export default class SortingComponent {

}
