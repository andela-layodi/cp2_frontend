import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'new_listitem',
    templateUrl: 'app/listitems/new_listitem.component.html',
})
 export class NewListItemComponent implements OnInit {
     item: any[] = [];
     bucketlistid: number;

     constructor(route: ActivatedRoute, private bucketlistservice: BucketListService, private router: Router) {
         this.bucketlistid = route.snapshot.params['id']
 }

     AddBucketListItem(item_name: string): any {
        //  item_name = item_name.trim();
        //  if (!item_name) { return; }
          this.bucketlistservice.AddBucketListItem(item_name, this.bucketlistid).subscribe(
              result => {
                  console.log('new item:', result)
                  setTimeout(() => { this.router.navigate(['bucketlists', this.bucketlistid]); });

                 },
             )
     }


     ngOnInit() {
     }
 }
