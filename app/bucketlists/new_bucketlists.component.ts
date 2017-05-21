import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'new_bucketlist',
    templateUrl: 'app/bucketlists/new_bucketlist.component.html',
})
 export class NewBucketListComponent implements OnInit {


     constructor(private bucketlistservice: BucketListService, private router: Router) { }

     AddBucketList(list_name: string): any {
         list_name = list_name.trim();
         if (!list_name) { return; }
          this.bucketlistservice.AddBucketList(list_name).subscribe(
              result => {
                  setTimeout(() => { this.router.navigate(['bucketlists']); });

                 },
             )
     }


     ngOnInit() {
     }
 }
