import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'module1',
      exposedModule: './Module'
    }).then(m => {
      console.log('im here');
      console.dir(m);

      return m.AppsModule;
    }).catch(error => {
      console.log('error');
      console.dir(error);
    }),
    // loadChildren: () => import('module1/Module').then(m => m.AppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
