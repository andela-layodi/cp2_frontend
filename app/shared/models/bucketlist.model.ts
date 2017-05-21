import { ListItems } from './listitems.model';

export class BucketList{
    public id: number;
    public listName: string;
    public createdBy: number;
    public listItem: ListItems[];
    public dateCreated: Date;
    public dateModified: Date;
}

export class BucketListPaginated{
    public bucketlists: BucketList[];
}
