import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { MaterialModule } from "./material/material.module";

import { environment } from "../environments/environment";
import { GarageComponent } from "./garage/garage.component";
import { AppService } from "./app.service";
import { SidenavComponent } from "./forum/sidenav/sidenav.component";
import { ForumComponent } from "./forum/forum.component";
import { HeaderComponent } from "./forum/header/header.component";
import { FooterComponent } from "./forum/footer/footer.component";
import { MessagesContainerComponent } from "./forum/messages-container/messages-container.component";

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    SidenavComponent,
    ForumComponent,
    HeaderComponent,
    FooterComponent,
    MessagesContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    environment.production
      ? ServiceWorkerModule.register("/ngsw-worker.js")
      : []
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
