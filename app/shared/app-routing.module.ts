import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { WelcomeComponent } from './auth/welcome.component';
import { BucketListComponent } from './bucketlists/bucketlists.component';
import { NewBucketListComponent } from './bucketlists/new_bucketlists.component';
import { BucketListDetailComponent } from './bucketlists/bucketlist_detail.component';
import { UpgradeComponent } from './bucketlists/upgrade.component';
import { NewListItemComponent } from './listitems/new_listitem.component';
import { UpdateListItemComponent } from './listitems/update_listitem.component';
// import { DeleteListItemComponent } from './listitems/delete_listitems.component';
import { AuthGuard } from './shared/authentication.guard';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'home', component: WelcomeComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'auth/login', component: LoginComponent},
    {path: 'bucketlists', component: BucketListComponent},
    {path: 'bucketlists/new', component: NewBucketListComponent},
    {path: 'bucketlists/:id/edit', component: UpgradeComponent},
    {path: 'bucketlists/:id', component: BucketListDetailComponent},
    {path: 'bucketlists/:id/items', component: NewListItemComponent},
    {path: 'bucketlists/:list_id/items/:id', component: UpdateListItemComponent}
    // {path: 'bucketlists/:list_id/items/:id/delete', component: DeleteListItemComponent},

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
export const routingComponents = [RegisterComponent, LoginComponent, WelcomeComponent, BucketListComponent, NewBucketListComponent, BucketListDetailComponent, UpgradeComponent, NewListItemComponent, UpdateListItemComponent]
