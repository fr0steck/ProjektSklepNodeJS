const { pool } = require("../utils/db")
const { v4: uuid } = require('uuid');

class ProductRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new Error('Nazwa produktu musi mieć od 3 do 55 znaków')
        }

        if (!obj.count || obj.count < 1 || obj.count > 99999) {
            throw new Error('Liczba sztuk powinna sie mieścić od 1 do 99999')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `products` VALUES(:id, :name, :count)", {
            id: this.id,
            name: this.name,
            count: this.count,
        });

        return this.id;
    }

    static async listAll(name) {
        const [results] = await pool.execute('SELECT * FROM `products` WHERE category_name = :name',{
            name 
        })
        return results.map(obj => new ProductRecord(obj));
    }
}

module.exports = {
    ProductRecord
}