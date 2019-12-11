import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho;
  @Input() valorTotalCarrinho;

  @Output() removeCarrinho = new EventEmitter();
 rmvCarrinho(produto) {
    this.removeCarrinho.emit({
      ...produto,
      quantidade: 1,
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
