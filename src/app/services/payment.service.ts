import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const payMongoKey = 'sk_test_jVonsFzfprt3LmnkAiCJCHQ2';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(payMongoKey)}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {}
  createPayment(
    amount: number,
    description: string,
    currency = 'PHP',
    statement_descriptor = 'milk tea for bri'
  ) {
    const paymentDto = {
      data: {
        attributes: {
          amount: 10000,
          currency: 'PHP',
          description: 'Payment for Order #771',
          statement_descriptor: '',
          source: {
            id: 'tok_bNusM6oCxvRh8FaiqnDjby4z',
            type: 'token'
          }
        }
      }
    };
  }
}
