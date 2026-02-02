import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    { id: 1, name: "iPhone", price: 3000, quantity: 5 },
    { id: 2, name: "Samsung", price: 2500, quantity: 10 },
    { id: 3, name: "Nokia", price: 1500, quantity: 15 },
    { id: 4, name: "Xiaomi", price: 2000, quantity: 20 }
  ];

  panier: any[] = [];  // ← Ajoutez cette ligne

  addToCart(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
      this.panier.push({...product, quantity: 1});
      console.log('✅ Produit ajouté:', product.name);
    } else {
      alert('❌ Stock épuisé!');
    }
  }

  removeFromCart(item: any, index: number) {
    // Trouver le produit correspondant dans la liste des produits
    const product = this.products.find(p => p.id === item.id);
    if (product) {
      // Augmenter la quantité du produit
      product.quantity++;
    }
    // Supprimer l'item du panier
    this.panier.splice(index, 1);
    console.log('✅ Produit retiré du panier:', item.name);
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  // Calculer la quantité totale
  getTotalQuantity(): number {
    return this.products.reduce((total, product) => total + product.quantity, 0);
  }

  // Calculer la valeur totale du stock
  getTotalValue(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Calculer le prix moyen
  getAveragePrice(): number {
    const total = this.products.reduce((sum, product) => sum + product.price, 0);
    return Math.round(total / this.products.length);
  }
}