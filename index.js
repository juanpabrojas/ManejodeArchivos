const Contenedor = require('./contenedor.txt');

const producto = new Contenedor('./data.json')

async function enterProd() {
    await product.save({
        title: ("Arroz"),
        price: (150),
        thumbnail: ("http://www.arroz.com")
    })

    await product.save({
        title: ("Lentejas"),
        price: (200),
        thumbnail: ("http://www.lentejas.com")
    })

    await product.save({
        title: ("Pollo"),
        price: (300),
        thumbnail: ("http://www.pollo.com")
    })

    await product.save({
        title: ("Edulcorante"),
        price: (550),
        thumbnail: ("http://www.edulcorante.com")
    })
}

enterProd();
producto.getAll();
producto.getById(2);
//producto.deleteById(1);
//producto.deleteAll()
