import { Injectable } from '@angular/core';
import { Produto } from './Produto.model';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  formData  : Produto;
  list : Produto[];
  shopcart: any[];
  readonly rootURL ="http://localhost:8005/api"

  constructor(private http : HttpClient) { }

  postProduto(formData : Produto){
    return this.http.get(this.rootURL+'/produtos');    
  }

  getProdutos(formData):  Observable<HttpResponse<Config>>{
    console.log("chamando");
    return this.http.get<Config>(this.rootURL+'/produtos', { observe: 'response' });
    console.log("312312312");
    // return this.http.get(this.rootURL+'/produtos').toPromise().then(() => {
    //   console.log("lol")
    // });
     
   }

  refreshList(){
    return this.http.get(this.rootURL+'/produtos');
  }

  teste() {
    return this.http.get(this.rootURL+'/produtos');
  }

  putProduto(formData : Produto){
    return this.http.get(this.rootURL+'/produtos');     
   }

   deleteProduto(id : number){
    return this.http.get(this.rootURL+'/produtos');   }
}
