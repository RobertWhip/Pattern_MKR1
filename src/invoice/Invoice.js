/* Накладна:
    Опис доставки,
    Відділення відправки (місто, номер відділення)
    Відділення доставки (місто, номер відділення)
*/

const StandardDelivery = require('../delivery/StandardDelivery');

module.exports = class Invoice {
    constructor (description, fromDepartment, toDepartment, deliveryMethod){
        this.description = description || 'No description'; 
        this.fromDepartment = fromDepartment; 
        this.toDepartment = toDepartment;
        this.deliveryMethod = deliveryMethod || new StandardDelivery();
	}
    
    deliver() {
        return this.deliveryMethod.deliver(this.fromDepartment, this.toDepartment);
    }

	toString(){
        return `${this.description}; From ${this.fromDepartment.toString()} to ${this.toDepartment.toString()}`;
	}
}