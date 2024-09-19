import { Routes } from "@angular/router";
import { PipesModule } from "./pipes/pipes.module";
import { DirectivesModule } from "./directives/directives.module";
import { ServicesModule } from "./services/services.module";
import { ComponentsModule } from "./components/components.module";

export const APP_ROUTES: Routes = [
    { path: 'components', loadChildren: () => import('./components/components.module').then((m) => ComponentsModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then((m) => ServicesModule) },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => PipesModule) },
    { path: 'directives', loadChildren: () => import('./directives/directives.module').then((m) => DirectivesModule) },
];