import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GarageComponent } from "./garage/garage.component";
import { ForumComponent } from "./forum/forum.component";

const routes: Routes = [
  { path: "", redirectTo: "/garage", pathMatch: "full" },
  { path: "garage", component: GarageComponent },
  { path: "forum", component: ForumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
