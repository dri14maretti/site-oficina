import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SeguradorasComponent } from "./components/seguradoras/seguradoras.component";
import { ContatosComponent } from "./components/contatos/contatos.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

  {
    path: "seguradoras",
    component: SeguradorasComponent,
  },

  {
    path: "contatos",
    component: ContatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
