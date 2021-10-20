import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
//Api Local
//readonly APIUrl="https://localhost:44318/api";
//Api server
readonly APIUrl="https://foodsapi.azurewebsites.net/api/";


  constructor(private http:HttpClient) { }
    getFoodList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+"/fooditems");
      //return this.http.get<any>(this.APIUrl+"/Foods");

    
  }
  addFood(val:any){
    return this.http.post(this.APIUrl+"/fooditems", val)
    //return this.http.post(this.APIUrl+"/Foods", val)
  }
  editFood(val:any){
    return this.http.put(this.APIUrl+"/fooditems/"+val.id, val)
    //return this.http.put(this.APIUrl+"/Foods/"+val.id, val)
  }
  deleteFood(val:any){
    return this.http.delete(this.APIUrl+"/fooditems/"+val.id)
    //return this.http.put(this.APIUrl+"/Foods/"+val.id, val)
  }
}
