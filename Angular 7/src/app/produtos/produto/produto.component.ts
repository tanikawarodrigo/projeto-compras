import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/shared/produto.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  shopcart: any[] = [];

  constructor(private service: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ProdutoID: null,
      FullName: '',
      Position: '',
      Code: '',
      Mobile: ''
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.produtoID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  teste(form, e) {
    console.log(e);
    alert(`nelson`);
    e.preventDefault();
    this.shopcart.push(`Nelson`);
    console.log(this.shopcart);
  }

  insertRecord(form: NgForm) {
    this.service.postProduto(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', '. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putProduto(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', '. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
