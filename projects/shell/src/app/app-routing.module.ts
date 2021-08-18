import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module1',
    // loadChildren: () => loadRemoteModule({
    //   remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //   remoteName: 'module1',
    //   exposedModule: './module1'
    // }),
    loadChildren: () => import('module1/Module').then(m => m.AppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
