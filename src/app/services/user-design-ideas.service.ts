import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDesignIdea } from "../user-design-ideas/user-design-ideal.model";
import { Observable } from "rxjs";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http/src/response";

@Injectable()

export class UserDeisgnService {

    private _productUrl = "./api/products/userideas.json";

    constructor(private _http: HttpClient){}

    getUserIdeas() : Observable<UserDesignIdea[]> {
        return this._http.get<UserDesignIdea[]>(this._productUrl)
            .do(data => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getuserIdea(id: number) : Observable<UserDesignIdea> {
        return this.getUserIdeas()
                .map((products: UserDesignIdea[]) => products.find(p => p.userNumber === id))
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}