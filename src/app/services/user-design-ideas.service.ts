import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserDesignIdea } from "../components/user-design-ideas/user-design-idea.model";
import { Observable } from "rxjs";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http/src/response";
// import {  } from "";

@Injectable()

export class UserDesignService {

    // private _productUrl = "https://jsonplaceholder.typicode.com/todos";
    private _productUrl = "./api/userideas.json";

    constructor(private _http: HttpClient){}

    getUserIdeas() : Observable<IUserDesignIdea[]> {
        return this._http.get<IUserDesignIdea[]>(this._productUrl)
            .do(data => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getuserIdea(id: number) : Observable<IUserDesignIdea> {
        return this.getUserIdeas()
                .map((products: IUserDesignIdea[]) => products.find(p => p.userNumber === id))
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}