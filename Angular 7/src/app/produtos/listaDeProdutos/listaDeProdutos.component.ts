import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from 'src/app/shared/Produto.service';
import { Produto } from 'src/app/shared/Produto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listaDeProdutos',
  templateUrl: './listaDeProdutos.component.html',
  styleUrls: ['./listaDeProdutos.component.css']
})
export class listaDeProdutosComponent implements OnInit {

  @Input() carrinho;
  @Input() listaDeProdutos;
  @Output() adicionarCarrinho = new EventEmitter();
  

  
  constructor(private service: ProdutoService,
    private toastr: ToastrService) { }



  ngOnInit() {
    console.log(`asdasdasdas`, this.carrinho, this.listaDeProdutos);
    this.service.refreshList();
  }

  addCarrinho(produto) {
    this.adicionarCarrinho.emit({
      ...produto,
      quantidade: 1,
    });
  }

 

  populateForm(emp: Produto) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteProduto(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', ' Register');
      });
    }
  }

}
