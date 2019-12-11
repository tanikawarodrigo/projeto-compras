import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listaDeProdutosComponent } from './listaDeProdutos.component';

describe('listaDeProdutosComponent', () => {
  let component: listaDeProdutosComponent;
  let fixture: ComponentFixture<listaDeProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listaDeProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listaDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
