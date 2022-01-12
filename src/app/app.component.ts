import { Component } from '@angular/core';
import { menuItem } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Chirpus Pizza';
  item : menuItem[] = [new menuItem("Chirpie Pie", "Pizza", "Sourdough Pizza pie with 12 chirping blackbirds with BBQ Sauce", 22.00 ), new menuItem("Chirpeez Pizza","Pizza","It's Cheeze Pizza. Stop making fun of the name, we won't change it, we will change our menu first",20), new menuItem("Chirpie Knots","Bread","Garlic covered breadsticks tied into a knot", 10.00), new menuItem("Chirpie Wings","Wings","Boneless Chicken Wings, made with real imitation chicken", 8.00),new menuItem("Soft drinks, Ass.","Drinks", "Assorted soft drinks, if you order a softdrink's ass you will get a cup of iced ranch dressing. You got it, wise guy?", 1.50), new menuItem("Chirpie Lasagna","Pasta","Spaghetti and Meatballs stuffed Lasagna",12.00), new menuItem("Ceasar Salad","Salads","Stab this salad in the back instead of your friends!",7), new menuItem("Cinnamon Rolls","Deserts","Deep Fried Cinnamon Rolls covered in powdered sugar and caramel sauce",1)];

}
