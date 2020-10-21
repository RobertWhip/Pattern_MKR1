/* Експрес доставка

    Експрес доставка в межах одного міста відбувається автомобілем.

    Експрес доставка між містами складається із 3 етапів: доставки
    автомобілем із пункту відправки до 0 пункту у місті відправки, доставки
    літаком до 0 відділення у місті отримання та доставки автомобілем до
    пункту отримання.
*/

const Delivery = require('./Delivery');
const CarDeliveryType = require('./delivery_type/CarDeliveryType');
const PlaneDeliveryType = require('./delivery_type/PlaneDeliveryType');

module.exports = class StandardDelivery extends Delivery {
    constructor () {
        super();
        this.cityDeliveryType = new CarDeliveryType();
        this.intercityDeliveryType = new PlaneDeliveryType();
    }
}