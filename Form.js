class Form{
    constructor(){
        this.title=createElement("h1");
        this.nombreproducto=createElement("h4");
        this.departamento=createElement("h4")
        this.precioproducto=createElement("h4")
        this.descripcion=createElement("h4")
        this.stock=createElement("h4")
        this.inputN = createInput();
        this.inputD= createInput();
        this.inputP = createInput();
        this.inputDes = createInput();
        this.inputS = createInput();
        this.button = createButton("Registrar producto");
    }
    display(){
        this.title.html("Registro Producto");
        this.title.position(230,0);
        this.nombreproducto.html("Nombre del producto:");
        this.nombreproducto.position(120,100);
        this.departamento.html("Categoria o Departamento:");
        this.departamento.position(420,100);
        this.precioproducto.html("Precio del producto:");
        this.precioproducto.position(283,210);
        this.descripcion.html("Descripcion del producto:");
        this.descripcion.position(120,328);
        this.stock.html("Stock:");
        this.stock.position(420,329);


        this.inputN.position(108,140);
        this.inputD.position(427,140);
        this.inputP.position(262,250);
        this.inputDes.position(121,370);
        this.inputS.position(420,370);
        this.button.position(292,470);
        
        this.button.mousePressed(()=>{
            producto.nombreproducto=this.inputN.value();
            producto.departamento=this.inputD.value();
            producto.precioproducto=this.inputP.value();
            producto.descripcion=this.inputDes.value();
            producto.stock=this.inputS.value();
            producto.update();
        })
    }
}