import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ThemesService } from '@fundamental-ngx/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showWeekCount = false;
  compact = false;
  markWeekends = false;

  cssUrl: SafeResourceUrl | undefined;
  cssCustomUrl: SafeResourceUrl | undefined;

  constructor(private _themesService: ThemesService) {
    _themesService.setThemeByRoute();

    _themesService.onThemeQueryParamChange.pipe().subscribe(theme => {
        this.cssCustomUrl = theme.customThemeUrl;
        this.cssUrl = theme.themeUrl;
    });
  }
}
