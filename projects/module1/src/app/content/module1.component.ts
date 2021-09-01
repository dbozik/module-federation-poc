import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component {
  title = 'module1';

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
  }

  goToInternal(): void {
    this.router.navigate(['internal'], {relativeTo: this.activatedRoute});
  }
}
