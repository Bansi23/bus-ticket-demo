import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  customerList = [
    { "id" : 1, name : "Kshipra", "mobile" : 8915569126, "city" : "Kuala Lumpur"},
    { "id" : 2, name : "Aadarsh", "mobile" : 3246216627, "city" : "Kyoto"},
    { "id" : 3, name : "Aadesh", "mobile" : 3086340554, "city" : "Seattle" },
    { "id" : 4, name : "Aadi", "mobile" : 4175472208, "city" : "Manchester"},
    { "id" : 5, name : "Aahna", "mobile" : 7707021797, "city" : "Istanbul"},
    { "id" : 6, name : "Aakaar", "mobile" : 8899089172, "city" : "Milan"},
    { "id" : 7, name : "Aakash", "mobile" : 3203880436, "city" : "Madrid"},
    { "id" : 8, name : "Aalok", "mobile" : 2378664311, "city" : "Rome"},
    { "id" : 9, name : "Arpit", "mobile" : 7975412934, "city" : "Vienna"},
    { "id" : 10, name :"Daksh", "mobile" : 9099493976, "city" : "Budapest"}
  ]

  itemList = [
    { "id" : 1, name : "Canned Chicken", "amount" : 100 },
    { "id" : 2, name : "Crackers", "amount" : 200 },
    { "id" : 3, name : "Potatoes", "amount" : 300},
    { "id" : 4, name : "Nuts" , "amount" : 400 },
    { "id" : 5, name : "Pasta" , "amount" : 500 },
    { "id" : 6, name : "Peanut Butter" , "amount" : 600 },
    { "id" : 7, name : "chair" , "amount" : 700 },
    { "id" : 8, name : "fork" , "amount" : 800 },
    { "id" : 9, name : "camera" , "amount" : 900 },
    { "id" : 10, name :"ring" , "amount" : 1000 }
  ]

  createdInvoices : any [];

  setInvoice(val){
    this.createdInvoices.push(val);
  }
  getCreatedInvoices(){
    return this.createdInvoices;
  }

  getCustomerList(){
    return this.customerList;
  }

  getItemList(){
    return this.itemList;
  }
}
