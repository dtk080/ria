import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { AuthService } from "./auth.service";

@Injectable()
export class GoogleService {
    constructor(private httpClient: HttpClient,
        private authService: AuthService) {
    }

    getAllFiles(): Observable<any> {
        return this.httpClient.get(environment.driveApiUrl, {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.authService.getToken()
            })
        });
    }
}
