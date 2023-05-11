const { pool } = require('../utils/db');
const { v4: uuid } = require('uuid');

class CategoryRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new Error('Imie musi mieć od 3 do 25 znaków')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.giftId = obj.giftId;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `categories` ORDER BY `name` ASC");
        return results.map(obj => new ChildRecord(obj));
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `categories`(`id`, `name`) VALUES(:id, :name)", {
            id: this.id,
            name: this.name,
        });
        return this.id;
    }
}

module.exports = {
    CategoryRecord
}