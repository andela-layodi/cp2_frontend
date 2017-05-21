import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Configuration } from '../../shared/app.configuration';
import { BucketList, BucketListPaginated } from '../../shared/models/bucketlist.model';
import { ListItems } from '../../shared/models/listitems.model';
import { HttpWrapperService } from '../services/httpWrapper.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class BucketListService {

    private headers = new Headers(
    {
      "Content-Type": "application/json"
    });
  // Create headers for all endpoints that require authorization
  private authHeader = new Headers(
    {
      "Access-Control-Allow-Origin": '*',
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": localStorage.getItem('currentUser')
    }
  )


    public actionUrl: string;

    constructor(private http: HttpWrapperService, private configuration: Configuration, private storageService: StorageService) {
        this.actionUrl = configuration.Server + configuration.ApiUrl
    }

    registerUser(username: string, password: string): Observable<any> {
    return this.http
               .post(this.configuration.Server + this.configuration.ApiUrl + 'auth/register', JSON.stringify({'username': username, 'password': password}), {headers: this.headers})
               .map(response => response.json());
  }

    loginUser(username: string, password: string ): Observable<any>{

        return this.http.post(this.configuration.Server + this.configuration.ApiUrl + 'auth/login', JSON.stringify({ username: username, password: password }), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                if (token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', 'Bearer ' + token);

                }
            });
    }

    logoutUser() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    get username() {
        let username = this.storageService.getItem('username');
        return username;
    }

    set username(username: string) {
        if (!username) {
            this.storageService.removeItem('username');
        } else {
            this.storageService.setItem('username', username);
        }
    }

    AddBucketList(list_name: string): Observable<BucketList> {
        // let toAdd: string = JSON.stringify(
        // {
        //     id: bucketlist.id,
        //     name: bucketlist.listName,
        //     created_by: bucketlist.createdBy,
        //     item_name: bucketlist.listItem,
        //     date_created: new Date(),
        //     date_modified: new Date()
        // });
        // let options = this.prepareOptions(null);

        return this.http.post(this.actionUrl + 'bucketlists/', JSON.stringify({'list_name': list_name}))
            .map((response: Response) => <BucketList>response.json())
            .catch(this.handleError);
    }

    GetAllBucketList = (): Observable<BucketListPaginated> => {
        return this.http.get(this.actionUrl + 'bucketlists/')
            .map((response: Response) => <BucketListPaginated>response.json())
            .catch(this.handleError);
    }

    GetSingleBucketList = (id: number): Observable<BucketList> => {
        return this.http.get(this.actionUrl + `bucketlists/${id}/`)
            .map((response: Response) => <BucketList>response.json())
            .catch(this.handleError);
    }

    UpdateBucketList = (name: any, id: number): Observable<BucketList> => {
        // let options = this.prepareOptions(null);

        return this.http.put(this.actionUrl + `bucketlists/${id}/`, JSON.stringify({'list_name': name}))
            .map((response: Response) => <BucketList>response.json())
            .catch(this.handleError);
    }

    DeleteBucketList = (id: number): Observable<Response> => {
        return this.http.delete(this.actionUrl + `bucketlists/${id}/`)
            .catch(this.handleError);
    }

    GetSingleBucketListItem = (list_id: number, id: number): Observable<Response> => {
        return this.http.get(this.actionUrl + `bucketlists/${list_id}/` + `items/${id}/`)
            .map((response: Response) => <Response>response.json())
            .catch(this.handleError);
    }

    AddBucketListItem = (item_name: string, id: number): Observable<ListItems> => {
        // let toAdd: string = JSON.stringify(
        // {
        //     id: listitems.id,
        //     name: listitems.itemName,
        //     date_created: new Date(),
        //     date_modified: new Date(),
        //     done: listitems.done
        // });
        // let options = this.prepareOptions(null);

        return this.http.post(this.actionUrl + `bucketlists/${id}/` + `items/`, JSON.stringify({'item_name': item_name}))
            .map((response: Response) => <ListItems>response.json())
            .catch(this.handleError);
    }

    UpdateBucketListItem = (id: number, list_id: number, name: any): Observable<ListItems> => {
        // let options = this.prepareOptions(null);

        return this.http.put(this.actionUrl + `bucketlists/${list_id}/`+ `items/${id}/`, JSON.stringify({'item_name': name}))
            .map((response: Response) => <ListItems>response.json())
            .catch(this.handleError);
    }

    DeleteBucketListItem = (id: number, list_id: number): Observable<Response> => {
        return this.http.delete(this.actionUrl + `bucketlists/${list_id}/`+ `items/${id}/`)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private prepareOptions = (options: RequestOptionsArgs): RequestOptionsArgs => {
        options = options || {};

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}
