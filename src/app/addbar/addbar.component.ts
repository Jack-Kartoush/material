import { Component, OnInit } from '@angular/core';
export  interface Tasks{
  emphtyKey: number;
  content: String;
 }
@Component({
  selector: 'app-addbar',
  templateUrl: './addbar.component.html',
  styleUrls: ['./addbar.component.css']
})

export class AddbarComponent implements OnInit {
  tasks : Tasks[];
  cIdeas : String;
  eIdeas : number;
  add!: Tasks[];
  
  constructor(){
    this.cIdeas = '';
    this.eIdeas = 0;
    this.tasks=[];
  }
  createIdea(){
    this.eIdeas++;
     if(!this.cIdeas){
      alert("add something")
    }
   
    
    localStorage.setItem(JSON.stringify(this.eIdeas),
    JSON.stringify(this.cIdeas));
    const newIdea: Tasks ={
      emphtyKey : this.eIdeas,
      content : this.cIdeas,
    };
   
    this.tasks.push(newIdea);
    localStorage.getItem(JSON.stringify(this.cIdeas)) ;
    this.cIdeas = '';
  }

  ngOnInit(): void {
    
  }


}
