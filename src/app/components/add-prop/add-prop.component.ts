import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prop',
  templateUrl: './add-prop.component.html',
  styleUrl: './add-prop.component.css'
})
export class AddPropComponent implements OnInit {
constructor(private router:Router){}
ngOnInit(): void {
    
}
onBack(){
  this.router.navigate(['/'])
}
onSubmit(form:NgForm){
  
  alert("Your Form is Submitted!!!")
  console.log(form)
  // this.router.navigate(['/'])
}
}
