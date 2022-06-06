import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ClickCounterComponent } from './components/click-counter/click-counter.component';
import { GlobalSettingsComponent } from './components/global-settings/global-settings.component';
import { FileSearchComponent } from './components/file-search/file-search.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FileItemComponent } from './components/file-search/file-item/file-item.component';
import { MessageDisplayComponent } from './components/file-search/message-display/message-display.component';
import { PdfViewerComponent } from './components/file-search/pop-up/pdf-viewer/pdf-viewer.component';
import { FileRenameComponent } from './components/file-search/pop-up/file-rename/file-rename.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClickCounterComponent,
    GlobalSettingsComponent,
    FileSearchComponent,
    ShortenPipe,
    FileItemComponent,
    MessageDisplayComponent,
    PdfViewerComponent,
    FileRenameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
