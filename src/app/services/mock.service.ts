import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  orderStatus() {
    return [
      { "id": 1, 'order_status': 'Pending' },
      { "id": 2, 'order_status': 'Processing' },
      { "id": 3, 'order_status': 'Complete' },
      { "id": 4, 'order_status': 'Cancelled' }
    ]
  }

  paymentStatus() {
    return [
      { "id": 1, 'payment_status': 'Pending' },
      { "id": 2, 'payment_status': 'Authorized' },
      { "id": 3, 'payment_status': 'Paid' },
      { "id": 4, 'payment_status': 'Partially refunded' },
      { "id": 5, 'payment_status': 'Refunded' },
      { "id": 6, 'payment_status': 'Voided' }
    ]
  }

  shippingStatus() {
    return [
      { "id": 1, 'shipping_status': 'Shipping not required' },
      { "id": 2, 'shipping_status': 'Not yet shipped' },
      { "id": 3, 'shipping_status': 'Partially shipped' },
      { "id": 4, 'shipping_status': 'Shipped' },
      { "id": 5, 'shipping_status': 'Delivered' },
    ]
  }

  paymentMethod() {
    return [
      { "id": 1, 'payment_method': 'Check / Money Order' },
      { "id": 2, 'payment_method': 'Credit Card(Payments.Manual)' },
      { "id": 3, 'payment_method': 'Credit Card(Payments.Square)' },
      { "id": 4, 'payment_method': 'Credit Card(Payments.WorldpayUS)' },
      { "id": 5, 'payment_method': 'PayPal Standard' },
    ]
  }
  vender() {
    return [
      { "id": 1, 'vender': 'Vender 1' },
      { "id": 2, 'vender': 'vender 2' },

    ]
  }

  customerRoles() {
    return [
      { "id": 1, "role": "Administrator" },
      { "id": 2, "role": "Forum Moderators" },
      { "id": 3, "ro;e": "Guests" },
      { "id": 4, "role": "Registered" },
      { "id": 5, "role": "Vendors" }
    ]
  }

  //#region product module static lists
  getWareHouseList() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Warehouse 1 (New York)' },
      { id: 2, name: 'Warehouse 2 (Los Angeles)' },
    ]
  }

  getProductType() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Simple' },
      { id: 2, name: 'Grouped (product with variants)' },
    ]
  }

  getVendorList() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Vendor 1' },
      { id: 2, name: 'Vendor 2' },
    ]
  }

  getPublisedList() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Published only' },
      { id: 2, name: 'Unpublished only' },
    ]
  }

  getTaxCategory() {
    return [
      { id: 1, name: 'Books' },
      { id: 2, name: 'Electronics & Software' },
      { id: 3, name: 'Downloadable Products' },
      { id: 4, name: 'Jewelry' },
      { id: 5, name: 'Apparel' },
    ]
  }

  getDiscountList() {
    return [
      { id: 1, name: 'Sample discount with coupon code' },
      { id: 2, name: 'test for discount' },
    ]
  }

  getInvantoryMethods() {
    return [
      { id: 1, name: "Don't track inventory"},
      { id: 2, name: 'Track inventory' },
      { id: 3, name: 'Track inventory by product attributes' },
    ]
  }

  getControlTypes() {
    return [
      { id: 1, name: 'Drop-down list' },
      { id: 2, name: 'Radio button list' },
      { id: 3, name: 'Checkboxes' },
      { id: 4, name: 'Textbox' },
      { id: 5, name: 'Multiline textbox' },
      { id: 6, name: 'Date picker' },
      { id: 7, name: 'File upload' },
      { id: 8, name: 'Color squares' },
      { id: 9, name: 'Image squares' },
      { id: 10, name: 'Read-only checkboxes' },
    ]
  }

  getAttributeValueType() {
    return [
      { id: 1, name: 'Simple' },
      { id: 2, name: 'Associated to product' }
    ]
  }

  getAttributeType() {
    return [
      { id: 1, name: 'Option' },
      { id: 2, name: 'Custom text' },
      { id: 3, name: 'Custom HTML text' },
      { id: 4, name: 'Hyperlink' },
    ]
  }

  getAttribute() {
    return [
      { id: 1, name: 'Screensize' },
      { id: 2, name: 'Color' },
      { id: 3, name: 'CPU Type' },
      { id: 4, name: 'Memory' },
      { id: 5, name: 'Hard drive' },
    ]
  }
  //#endregion

  constructor() { }
}
