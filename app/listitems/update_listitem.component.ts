import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service';
declare let $:any;

@Component ({
    selector: 'update_listitem',
    templateUrl: 'app/listitems/update_listitem.component.html',
})

export class UpdateListItemComponent {
    id: number;
    list_id: number;
    item: any;

    constructor(route: ActivatedRoute, private bucketlistservice: BucketListService, private router: Router) {
      this.id = route.snapshot.params['id'];
      console.log("Item ID: ", this.id);
      console.log("Params: ", route.snapshot.params);
      this.list_id = route.snapshot.params['list_id'];
      console.log("BL ID: ", this.list_id);
     }
     ngOnInit () {
         this.GetSingleBucketListItem(this.list_id, this.id);
     }

     GetSingleBucketListItem(list_id, id): any {
         console.log('ID get:', id)
         this.bucketlistservice.GetSingleBucketListItem(list_id, id).subscribe(
             item => {this.item = item,
                console.log("item get: ", item)}
         );
     }

    UpdateBucketListItem(name: string): void {
        // let id = lo
        this.bucketlistservice.UpdateBucketListItem(this.id, this.list_id,  name).subscribe(
            result => {
                console.log('new item:', result)
                setTimeout(() => this.GetSingleBucketListItem(this.list_id, this.id), 3);
                    this.router.navigate(['bucketlists', this.list_id]);
            }
        )
    }
    DeleteBucketListItem(id, list_id): any {
        this.bucketlistservice.DeleteBucketListItem(this.id, this.list_id).subscribe(
            result => {
                if (result) {
                    // $('#' + bucket.id).modal('hide');
                    setTimeout ( () =>
                                        this.router.navigate(['bucketlists', this.list_id]));
                }
            }

    )
    }


}
