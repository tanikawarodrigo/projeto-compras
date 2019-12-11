import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/Produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  carrinho: any;
  valorTotalNoCarrinho: number;
  listaDeProdutos: any;
  // (any)[] =  [
  // ];

  // {nome: string, preco: number}
  
  constructor(private service: ProdutoService) { 
    this.carrinho = []
  }

  calculaValorTotal() {
    let total = 0;
    this.carrinho.forEach((produtoNoCarrinho) => {
      console.log("somando", produtoNoCarrinho.preco);
      total = total + produtoNoCarrinho.preco;
    });
    this.valorTotalNoCarrinho = total;
    console.log("Valor total do carrinho"+ total);
    return total;
  }


  addCarrinho($event) {
    console.log("Recebemos um evento do filho", $event);
    let existe = false;
    let index = 0;
    this.carrinho.forEach((produto, i) => {
      if(produto.nome == $event.nome) {
        existe = true;
        index = i;
      }

    });

    if(existe) {
      this.carrinho[index].quantidade += 1;
      this.carrinho[index].preco += $event.preco;
    } else {
      this.carrinho.push($event);
    }
    console.log("Carrinho atuakiuzado", this.carrinho);
    this.calculaValorTotal();
  }

  removeCarrinho($event) {
    let existe = false;
    let index = 0;
    let preco = 0;
    this.carrinho.forEach((produto, i) => {
      if(produto.nome == $event.nome) {
        existe = true;
        index = i;
        
      }


    });

    this.listaDeProdutos.forEach((produto, i) => {
      if(produto.nome == $event.nome) {
        preco = produto.preco;
      }
      

    });

    if(existe) {
      this.carrinho[index].quantidade -= 1;
      this.carrinho[index].preco -= preco;
    }


    if(this.carrinho[index].preco == 0) {
      this.carrinho.splice(index, 1);
    }
    this.calculaValorTotal();
  }
  

  ngOnInit() {
    console.log("dsadhasuidhkjashdkjashdas");
    this.service.getProdutos({dd:"dd"}).subscribe((resp) => {
      console.log("resssspp", resp);
      this.listaDeProdutos = resp.body;
    });
  }

}
