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
      { "id": 1, '_vender': 'Vender 1' },
      { "id": 2, 'vender': 'vender 2' },

    ]
  }

  constructor() { }
}
