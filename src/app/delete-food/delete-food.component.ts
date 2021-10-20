import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
@Component({
    selector: 'app-delete-food',
    templateUrl: './delete-food.component.html',
    styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

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
    deleteFood() {
        var val = {
            id: this.id,
            title: this.title,
            desc: this.desc,
            imgSource: this.imgSource
        }
        try {
            this.service.deleteFood(val).subscribe(res => {
                alert("Delete food successfully");
            });
        }
        catch (error) {
            alert("Have error" + error)
        }
    }
    refreshFood() {
        this.desc = "";
        this.title = "";
        this.imgSource = "";
    }
}



