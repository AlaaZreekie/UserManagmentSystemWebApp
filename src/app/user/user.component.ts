import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {Router , RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private router : Router){
    console.log("Hello world");
  }
  ngOnDestroy(): void {
        //important

    //when destroy component
    console.log("8. ng destroy called");
  }
  ngAfterViewChecked(): void {
        //important

    //use for ng view has been checked
    console.log("7. ng view checked called");
  }
  ngAfterViewInit(): void {
        //important

    //use for view child
    console.log("6. ng view init called");
  }
  ngAfterContentChecked(): void {
    //use for ng content checked
    console.log("5. ng after content checked called");
  }
  ngAfterContentInit(): void {
    //use for ng content
    console.log("4. ng After content called");
  }
  ngDoCheck(): void {
    //use every change detection
    console.log("3. ngDoCheck called");
  }
  ngOnInit(): void {
    //important
    //this is used for APIs calls
    console.log("2. ngOnInit called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //use for components input property
    console.log("1. ngOnChanges called.");
    console.log("-----------------"+changes+"-----------------------")
  }


  loginData() {
    // this.router.navigateByUrl("data-binding");
    this.router.navigate(['data-binding', ])
  }
}
