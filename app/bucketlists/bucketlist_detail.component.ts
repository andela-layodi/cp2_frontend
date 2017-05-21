import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service';
import { BucketList} from '../shared/models/bucketlist.model';
import { Observable } from 'rxjs/Observable';
declare let $:any;

@Component ({
    selector: 'bucketlists',
    templateUrl: 'app/bucketlists/bucketlist_detail.component.html',
})

export class BucketListDetailComponent implements OnInit {
    list_id: any;
    bucketlist: BucketList;

    constructor(route: ActivatedRoute, private bucketlistservice: BucketListService, private router: Router) {
     this.list_id = route.snapshot.params['id']
  }

    ngOnInit() {
        console.log("DETAILS: ")
        this.GetSingleBucketList(this.list_id);
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
        }
    );
}

DeleteBucketListItem(item): any {
    this.bucketlistservice.DeleteBucketListItem(item.id, this.list_id).subscribe(
        result => {
            if (result) {
                $('#' + item.id).modal('hide');
                this.router.navigate(['bucketlists', this.list_id]);
                setTimeout ( () =>
                                    this.GetSingleBucketList(this.list_id));
                                    this.router.navigate(['bucketlists', this.list_id]);
            }
        }

)
}

redirectToNewItem(id: number) {
    // $event.preventDefault();
    this.router.navigate(['bucketlists/', id, 'items']);
}
redirectToUpdateItem(id: number, item_id:number, name:string) {
    this.router.navigate(['bucketlists/', id, 'items', item_id]);
}
// redirectToDeleteItem(id: number, item_id:number) {
//     this.router.navigate(['bucketlists/', id, 'items', item_id, 'delete']);
// }



 }
