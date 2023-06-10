import { Component } from '@angular/core';
import { TodoItem } from './todoitems';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(){}
   model =new Model();
   displayAll : boolean =false;
   inputText="";
   
  
  getName(){
    return this.model.name;
  }
  getitems(){

    if (this.displayAll) {
      return this.model.items;
    }else{
      return this.model.items.filter(item=> item.action == false);
    }
  }
  addItem(){
    if (this.inputText) {
      this.model.items.push({description: this.inputText ,action:false});
    }
    else{
      alert("Lütfen bilgi giriniz");
    }
    
  }
  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

}
