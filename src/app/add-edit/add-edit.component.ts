import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() food: any;
  id: string;
  title: string;
  imgSource: string;
  desc: string;
  FoodList: any = [];
  ngOnInit(): void {
    this.id = this.food.id;
    this.desc = this.food.desc;
    this.imgSource = this.food.imgSource;
    this.title = this.food.title;
  }
  addFood() {
    var val = {
      id: this.id,
      title: this.title,
      desc: this.desc,
      imgSource: this.imgSource
    }
    try {
      if (this.title == "" || this.desc == "" || this.imgSource == "") {
        alert("Please fill out all input information!");
      } else {
        this.service.addFood(val).subscribe(res => {
          alert("Add new food successfully");
        });
      }
    } catch (error) {
      alert("Have error" + error)
    }
  }
  editFood() {
    var val = {
      id: this.id,
      title: this.title,
      desc: this.desc,
      imgSource: this.imgSource
    }
    try {
      if (this.title == "" || this.desc == "" || this.imgSource == "") {
        alert("Please fill out all input information");
      } else {
        this.service.editFood(val).subscribe(res => {
          alert("Update food successfully");
        });
      }
    } catch (error) {
      alert("Have error" + error)
    }
  }
  refreshFood() {
    this.desc = "";
    this.title = "";
    this.imgSource = "";
  }
}



