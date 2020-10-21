/* доставка
*/

const DeliveryType = require('./delivery_type/DeliveryType');
const Department = require('../department/Department');

module.exports = class Delivery {
    constructor () {
        this.cityDeliveryType = new DeliveryType();
        this.intercityDeliveryType = new DeliveryType();
    }

    deliver(fromDepartment, toDepartment) {
        let result = undefined;
        if (fromDepartment.city === toDepartment.city) {
            result = this.inCityDelivery(fromDepartment, toDepartment);
        } else {
            result = this.intercityDelivery(fromDepartment, toDepartment);
        }

        return result;
    }

    // when departmentA.city === departmentB.city
    /*
        Звичайна доставка в межах одного міста відбувається велосипедом,
        Експрес доставка в межах одного міста відбувається автомобілем.
    */
    inCityDelivery (fromDepartment, toDepartment) {
        return `Delivery type: ${this.cityDeliveryType.getType()}; Delivering: ${fromDepartment.toString()} to ${toDepartment.toString()}`;
    }

    // when departmentA.city != departmentB.city
    /*
        Звичайна доставка між містами складається із 3 етапів: доставки
        велосипедом із пункту відправки до 0 пункту у місті відправки, доставка
        потягом до 0 відділення у місті отримання та доставки велосипедом до
        пункту отримання.
        Експрес доставка між містами складається із 3 етапів: доставки
        автомобілем із пункту відправки до 0 пункту у місті відправки, доставки
        літаком до 0 відділення у місті отримання та доставки автомобілем до
        пункту отримання.
    */
    intercityDelivery (fromDepartment, toDepartment) {
        const deliveries = ['Delivery in 3 stages:'];

        const fromDepartment0 = new Department(0, fromDepartment.city);
        const toDepartment0 = new Department(0, toDepartment.city);

        deliveries.push(`1.Delivery type: ${this.cityDeliveryType.getType()}; Delivering: ${fromDepartment.toString()} to ${fromDepartment0.toString()}`);
        deliveries.push(`2.Delivery type: ${this.intercityDeliveryType.getType()}; Delivering: ${fromDepartment0.toString()} to ${toDepartment0.toString()}`);
        deliveries.push(`3.Delivery type: ${this.cityDeliveryType.getType()}; Delivering: ${toDepartment0.toString()} to ${toDepartment.toString()}`);
        
        return deliveries.join('\n');
    }
}