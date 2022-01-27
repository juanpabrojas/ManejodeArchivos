const fs = require("fs").promises;

class Contenedor {
    constructor(_pathFile) {
        this.pathFile = this.pathFile;
    }

    async save(obj) {
        //Recibe un objeto, lo guarda y devuelve el id que se le asigno
        try {
            const products = await this.getAll();
            obj.id = (products[products.length - 1]?.id || 0) + 1;
            const data = [...products, obj];
            await fs.writeFile(this.pathFile, JSON.stringify(data, null, 2));
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }

    async getById(id) {
        //Recibe un id que lanza null si no esta o un objeto con ese id
        try {
            const products = await this.getAll();
            const result = products.find((product) => product.id === id);
            result === undefined ? null : console.log(result);
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }

    async getAll() {
        //Devuelve un array con los objetos presentes
        try {
            const products = await fs.readFile(this.pathFile, "utf-8");
            const data = JSON.parse(products);
            const array = Array.from(data);
            console.log("Contenedor:", data)
        } catch (error) {
            console.log('Hubo un error', error)
        }
    }

    async deleteById(id) {
        //Elimina del archivo el objeto con el id buscado
        try {
            const products = await this.getAll();
            const result = products.filter((product) => product.id !== id);
            await fs.writeFile(this.pathFile, JSON.stringify(result, null, 2));
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }

    async deleteAll() {
        //Elimina todos los objetos presentes
        try {
            await fs.writeFile(this.pathFile, "");
        } catch (error) {
            console.log('Hubo un error', error);
        }
    }
}

module.exports = Contenedor;
