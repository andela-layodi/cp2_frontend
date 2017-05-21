import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service';
import { BucketList} from '../shared/models/bucketlist.model';
import { Observable } from 'rxjs/Observable';
declare let $:any;
@Component ({
    selector: 'bucketlists',
    templateUrl: 'app/bucketlists/bucketlists.component.html',
})

export class BucketListComponent implements OnInit {
    availableBucketlists: BucketList;
    bucketlists : any[] = [];

    constructor(private bucketlistservice: BucketListService, private router: Router) { }

    ngOnInit() {
        this.GetAllBucketList();
    }

    GetAllBucketList(): any {
    this.bucketlistservice.GetAllBucketList()
      .subscribe(

        bucketlists => {this.bucketlists = bucketlists.bucketlists
        console.log(bucketlists)},


    );
}
DeleteBucketList(bucket): any {
    this.bucketlistservice.DeleteBucketList(bucket.id).subscribe(
        result => {
            if (result) {
                $('#' + bucket.id).modal('hide');
                setTimeout ( () => this.GetAllBucketList());
                                    this.router.navigate(['bucketlists']);
            }
        }
    )
}
    redirectToNew($event: any) {
        $event.preventDefault();
        this.router.navigate(['bucketlists/new']);
    }
    redirectToItem(id: number) {
        // $event.preventDefault();
        this.router.navigate(['bucketlists/', id]);
    }
    redirectToUpdate(id: number) {
        this.router.navigate(['bucketlists/', id, 'edit']);
    }
    // private getBucketList = (): void => {
    //     this.bucketlists = this.bucketlistservice.GetAllBucketList();
    // }

 }
