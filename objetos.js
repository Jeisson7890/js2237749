var ob={
 nombre:"daniel"
 documento:12345,
 ficha:2237749,
 datos:function(){return `soy ${this.nombre},
 identificado con el numero $ {this.documento},
 de la ficha ${this.ficha}
 mi telefono es ${this. telefono}`}

    }
}
console.log(ob.datos());
ob.nombre="santi"
console.log(ob.datos());
ob.telefono=2233445;
console.log(ob.datos());