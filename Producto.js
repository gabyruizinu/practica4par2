class Producto {
    constructor(){
       this.nombreproducto=null;
       this.departamento=null;
       this.precioproducto=null;
       this.descripcion=null;
       this.stock=null;
    }
 update(){
     database.ref('producto').set({
      'nombre producto':  this.nombreproducto,
      'departamento': this.departamento,
      'precio producto': this.precioproducto,
      'descripcion': this.descripcion,
      'stock': this.stock
     })
 }   
}