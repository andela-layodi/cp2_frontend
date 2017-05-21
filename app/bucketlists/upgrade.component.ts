import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service';
import { BucketList} from '../shared/models/bucketlist.model';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'upgrade',
    templateUrl: 'app/bucketlists/upgrade.component.html',
})

export class UpgradeComponent implements OnInit {
    bucketlist: any;

    constructor(route: ActivatedRoute, private bucketlistservice: BucketListService, private router: Router) {
     this.bucketlist = route.snapshot.params['id']
  }

    ngOnInit() {
        this.GetSingleBucketList(this.bucketlist);
    }


    GetSingleBucketList(id): any {
        console.log('ID:', id)
        this.bucketlistservice.GetSingleBucketList(id)
        .subscribe(
            bucketlist => {this.bucketlist = bucketlist
                console.log(bucketlist)},


);
 }
    UpdateBucketList(name: string, id: number): void {
    this.bucketlistservice.UpdateBucketList(name, id).subscribe(
        result => {
            setTimeout( () =>  this.GetSingleBucketList(id));
                                this.router.navigate(['bucketlists']);
        }
    );
}



 }
