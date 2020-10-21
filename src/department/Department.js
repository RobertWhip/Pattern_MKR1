/* Відділення:
    місто - city
    номер відділення - id

    toString()
*/

module.exports = class Department {
    constructor (id, city){
		this.id = id || 0;
		this.city = city || "Unknown city";
	}
	
	toString(){
        return `${this.city}'s department №${this.id}`;
	}
}