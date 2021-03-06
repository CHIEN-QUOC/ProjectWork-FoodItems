import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'DXC Cuisine Angular';
    constructor(private service: SharedService) {
    }


    //use for testing
    popular_foods = [
        {
            id: 1,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/9dd6494b-84f6-4459-8b55-359d45f8723c.jpeg',
            title: 'Wet Burrito',
            desc: 'French Fries, Any Kind of meat, Lettuce, Cheese, Sour Cream, Beans, Pico de Gallo, Avocado'
        },
        {
            id: 2,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/e05d185a-cca5-418e-b12d-4896e0e76100.jpeg',
            title: 'Super Burrito de Carne',
            desc: 'Rice, Beans, Avocado, Sour Cream, Cheese, Hot Salsa, Onions and Choice of Meat.'
        },
        {
            id: 3,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/8271ecd9-5999-45ef-94bd-9548e20e2cc8',
            title: 'Shrimp Dumplings',
            desc: 'French Fries, Any Kind of meat, Lettuce, Cheese, Sour Cream, Beans, Pico de Gallo, Avocado'
        },
        {
            id: 4,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/afe3299b-3d2c-42ae-bc2b-49ebae6f2a08.jpeg',
            title: 'House Spicy Chow Mein Bundle',
            desc: 'Prawns, beef, and chicken. Hot and spicy. Served with your choice of Coca-Cola product.'
        },
        {
            id: 5,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/df537120-d788-4c91-850d-7cfb36383aee',
            title: 'House Chow Mein Bundle',
            desc: 'Prawns, beef, and chicken. Served with your choice of Coca-Cola product.'
        },
        {
            id: 6,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/d620f5a2-7447-4661-995b-b5d72f30496a',
            title: 'Mango Matcha Latte',
            desc: 'Full-bodied, fragrant, and tropical. Organic ceremonial matcha. When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.'
        },
        {
            id: 7,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/f03c0162-9526-4b07-bebe-4cede928e7a5',
            title: 'Mango Matcha Latte',
            desc: 'Fried rice, with a coca-cola product'
        },
        {
            id: 8,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/16fb7fa3-2b14-4636-a479-f906062f552e.jpeg',
            title: 'Procoly Ahu',
            desc: 'Fried. Served with your choice of Coca-Cola Product.'
        },
        {
            id: 9,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/c75bb883-af05-4769-ab20-679274f4d969.jpeg',
            title: 'Espresso Macchiato',
            desc: 'Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.'
        },
        {
            id: 10,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/a0ebf83a-234a-475b-95ea-4f05249a7b0b',
            title: 'Roasted Duck',
            desc: 'Roasted Duck Bejing Formular.'
        },
        {
            id: 11,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/b4b84466-4ce7-4423-8852-388c6443ef93.jpeg',
            title: 'Noodle Soup with Wonton + Choice of Congee',
            desc: 'Noodle Soup with Wonton. Served with choice of Congee'
        },
        {
            id: 12,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/5ccbfe25-5235-491f-92b6-06277e862332',
            title: 'BBQ Triple Combination',
            desc: 'Pork BBQ Triple Combination . Coffee or CocaCola'
        },
        {
            id: 13,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/3df9fe44-d810-4d19-a63e-9615eb7fb999.jpeg',
            title: 'Dry Beef Pho - Ph??? x??o b??',
            desc: 'Vietnam food - Pho famous'
        },
        {
            id: 14,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/3b16e7d8-4890-490b-ad7d-26832be05bf0',
            title: 'Minced Beef with Chinese Parsley Soup',
            desc: 'Minced Beef with Chinese Parsley Soup - Server with Chinese Wine'
        },
        {
            id: 15,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/8d0d39a4-9268-4124-912e-e3f39a945270',
            title: 'Salt and Pepper Lobster',
            desc: 'Salt and Pepper Lobster + 4 cans Tiger Beer'
        },
        {
            id: 16,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/91ac561a-d34a-4381-9718-f944bfdd8f36',
            title: '3 Kinds of BBQ Combinate Plate ????????? Bundle',
            desc: 'Served with your choice of Coca-Cola product.'
        },
        {
            id: 17,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/65e2c21b-bd5c-4439-86cf-3ec2a2747186',
            title: 'BBQ Pork',
            desc: 'Served with your choice of Coca-Cola product.'
        },
        {
            id: 18,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/c93f79b6-b097-49b2-8f33-a169ff9463c9.jpeg',
            title: 'BBQ Pork Mix Combo',
            desc: 'Served with your choice of Coca-Cola product.'
        },
        {
            id: 19,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/64c53582-f3a4-4180-ae58-588b09b66c48.jpeg',
            title: 'Szechuan Beef Noodle Soup',
            desc: 'Served with your choice of Coca-Cola product.'
        },
        {
            id: 20,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/73ae7d02-586c-46e7-8fbf-228135920d8e.jpeg',
            title: 'Salt and Pepper Spices Half and Half',
            desc: 'With fried rice, boiled rice, or lo mein. + 1 CocaCola'
        },
        {
            id: 21,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/6cd12011-8025-4188-a787-f0e61a972448',
            title: 'Dim Sum Platter',
            desc: 'Six pieces. Prawn, vegetarian, chive and prawn, scallop and prawn, zucchini and prawn, and spinach dumpling.'
        },
        {
            id: 22,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/f1d6d77d-9389-4e84-8fc5-fc2c589bf7d4',
            title: 'Steamed Prawn, Zucchini Dumplings',
            desc: 'Canton Element (Holborn) has a FHRS rating of 5. This information was updated on 14/05/2020. The current rating is on their page on the FSA Website.'
        },
        {
            id: 23,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/1953227c-6829-4d6f-8db2-3ebbbd5641ca',
            title: 'Stir Fried Scallops, King Prawns with Asparagus',
            desc: 'Canton Element (Holborn) has a FHRS rating of 5. This information was updated on 14/05/2020. The current rating is on their page on the FSA Website.'
        },
        {
            id: 24,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/601d7eff-0d52-4cc3-931c-f950e809d890',
            title: 'Bulgogi',
            desc: 'Korean traditional stir fried beef marinated in sweet soy sauce.'
        },
        {
            id: 25,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/f30d538c-10b2-4a92-a0ee-65842404581e',
            title: 'Pork Belly',
            desc: 'Pan fried pork belly.'
        },
        {
            id: 26,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/90e95fa8-6f74-43f6-8217-7775e6bc592a',
            title: 'Cheese Buldak',
            desc: 'Super spicy stir-fried chicken with mozzarella cheese.'
        },
        {
            id: 27,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/300c3919-b7e8-4550-803e-6e11a3b87d1a',
            title: 'Jeyuk',
            desc: 'Korean traditional stir pork marinated in chilli.'
        },
        {
            id: 28,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/f5a3cef7-2deb-4928-9501-1a86c2954e7d',
            title: 'Bibimbab',
            desc: 'Steamed rice with assorted vegetables and fried egg in a bowl.'
        },
        {
            id: 29,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/c45e56a1-b46c-4460-a0c9-65d5694b293e',
            title: 'Osam Bulgogi',
            desc: 'Stir fried squid and pork belly in chilli sauce.'
        },
        {
            id: 30,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/03f8db8b-706b-472e-bba6-301b6587a724.jpeg',
            title: 'Chicken katsu curry',
            desc: 'Deep fried chicken katsu with curry and steamed rice.'
        },
        {
            id: 31,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/abaee2a3-beb2-4e14-b194-d0b1af4b0901',
            title: 'Jampong',
            desc: 'Medium sized noodles with mixed seafood in chicken soup.'
        },
        {
            id: 32,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/cd4158c9-9c53-4bfe-884c-ddd9d0b87475',
            title: 'King Prawn in Hot Sambal Sauce',
            desc: 'Yum Yum (Victoria) has a FHRS rating of 3. This information was updated on 14/05/2020. The current rating is on their page on the FSA Website.'
        },
        {
            id: 33,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/15dd12e8-12af-45a7-a44e-e7b05d514d6a.jpeg',
            title: 'Hand-Pulled Noodles, Xinjiang Style',
            desc: 'With one person. With bone in chicken and potatoes in a spicy sauce.'
        },
        {
            id: 34,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/2cbb139d-37c0-4eab-ad21-39a834a517e0.jpeg',
            title: 'Pork Biang Biang Noodles',
            desc: 'With tomato and egg sauce, and chilli oil.'
        },
        {
            id: 35,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/01aaa7cb-e759-4046-be64-d9f3317feb07.jpeg',
            title: 'Samgyetang(Ginseng chicken soup)',
            desc: 'Samgyetang (Ginseng Chicken Soup) is a hot, steaming, very traditional Korean healthy dish which is served with whole Poussin stuffed with rice, garlic, and jujube in the chicken broth made with ginseng and herbal ingredients.'
        },
        {
            id: 36,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/f369d010-b700-4b00-8325-d1860d56160b.jpeg',
            title: 'Boneless Chicken in Ginger Sauce',
            desc: 'With bamboo shoots, sesame seeds, soy sauce, and chilli oil. Also includes cucumber, radish, green and red pepper, wood ear mushroom, strawberry, tomato and lettuce.'
        },
        {
            id: 37,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/37244986-10f9-4025-9f7a-a1748f4bf116.jpeg',
            title: 'Xi???an Spicy Sliced Beef',
            desc: 'With cucumber, coriander, and sesame oil. Also includes cucumber, radish, green and red pepper, wood ear mushroom, strawberry, tomato and lettuce.'
        },
        {
            id: 38,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/c85cf098-f897-4e52-8036-2dd002e09afb.jpeg',
            title: 'With green peppers, red peppers, cucumber, spring onion, and beansprouts.',
            desc: 'Samgyetang (Ginseng Chicken Soup) is a hot, steaming, very traditional Korean healthy dish which is served with whole Poussin stuffed with rice, garlic, and jujube in the chicken broth made with ginseng and herbal ingredients.'
        },
        {
            id: 39,
            imgSource: 'https://d1ralsognjng37.cloudfront.net/3d5a0d40-c76c-48ac-b8ed-2638774a7d37.jpeg',
            title: 'Chicken Spring Rolls',
            desc: 'Filled with assorted vegetables, bean thread noodles, and chicken.'
        },
        {
            id: 40,
            imgSource: 'https://media.cooky.vn/recipe/g1/1615/s480x480/recipe1615-prepare-step3-636520093053653228.jpg',
            title: 'B??nh tr??ng tr???n',
            desc: 'B??nh tr??ng, xo??i, tr???ng c??t, t??m kh??, rau th??m + 1 CocaCola'
        },

    ];
    FoodList: any = [];
    card_items = [];
    scroll_left_value = 0;
    max_width = 0;
    ActivateAddEditFood: boolean = false;
    food: any;
    ModelTitle: string;
    searchs: any;
    ngOnInit(): void {
        this.refreshFoodList();
    }
    searchFood(event: any) {

        this.searchs = event.target.value;

        if (this.FoodList.some((e) => e.title.includes(this.searchs))) {

            this.FoodList = this.FoodList.filter((e) =>

                e.title.includes(this.searchs)

            );

        }

        if (this.searchs == "") {

            this.refreshFoodList();

        }

    }

    btnPrevious() {
        // if (this.scroll_left_value >= 0) {
        //     this.scroll_left_value = this.scroll_left_value - 100;
        //this.ctnPopularFood.nativeElement.animate({ scrollLeft: this.scroll_left_value }, 200);
        document.getElementById('ctnPopularFood').scrollLeft -= 100;
        // } else {
        //     this.scroll_left_value = 0;
        // }
    }

    btnNext() {
        // if (this.scroll_left_value <= (this.max_width - 300)) {
        //     this.scroll_left_value = this.scroll_left_value + 100;
        // }
        // this.ctnPopularFood.nativeElement.animate({ scrollLeft: this.scroll_left_value }, 200);
        document.getElementById('ctnPopularFood').scrollLeft += 100;
    }
    refreshFoodList() {
        this.service.getFoodList().subscribe(data => {
            this.FoodList = data;
        })
    }
    addClick() {
        this.food = {
            id: 0,
            imgSource: "",
            title: "",
            desc: "",
        }
        this.ModelTitle = "Add New Food";
        this.ActivateAddEditFood = true;
    }
    editClick(item) {
        this.food = item;
        this.ModelTitle = "Update Food";
        this.ActivateAddEditFood = true;
    }
    closeClick() {
        this.ActivateAddEditFood = false;
        this.refreshFoodList();
    }
    deleteClick(item) {
        this.food = item;
        this.ModelTitle = "Delete Food";
        this.ActivateAddEditFood = true;
    }
}