import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";
import { CartService } from "../cart.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;

    const productId = Number(routeParam.get("productId"));
    this.product = products.find((product) => product.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Item has been added");
  }

  product: Product | undefined;
}
