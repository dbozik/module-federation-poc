import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(
    private readonly router: Router,
  ) {
  }

  public goToModule1(): void {
    this.router.navigate(['module1']);
  }

  public goToShell(): void {
    this.router.navigate(['']);
  }
}
