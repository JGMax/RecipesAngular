import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  inputText = ""
  products = { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('cart'));
    if (!data) {
      data = {}
    }
    for(let key in data) {
      if (data[key] <= 0) {
        delete data[key]
      }
    }
    this.products = data
    localStorage.setItem('cart', JSON.stringify(data));
  }

  addProduct() {
    const product = this.inputText.trim()
    if (product != "") {
      if (product in this.products) {
        this.products[product] += 1
      } else {
        this.products[product] = 1
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  removeProduct(name: string) {
    if (name in this.products && this.products[name] > 0) {
      this.products[name] -= 1
      if (this.products[name] == 0) {
        delete this.products[name]
      }
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
  }
}
