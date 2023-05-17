import {Component} from '@angular/core';
import packageJson from '../../package.json';
@Component({
    selector: 'app-root',
    template: `
        <div class="card-container">
            <div><h1>Version: {{version}}</h1></div>
            <app-phone></app-phone>
        </div>
    `,
    styles: [`
      .card-container {
        min-width: 120px;
        max-width: 600px;
        margin: 20px auto;
      }
    `]
})
export class AppComponent {
    title = 'angular-material-phone';

    version = packageJson.version;
}
