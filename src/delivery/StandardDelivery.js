/* Звичайна доставка
    Звичайна доставка в межах одного міста відбувається велосипедом.
    
    Звичайна доставка між містами складається із 3 етапів: доставки
    велосипедом із пункту відправки до 0 пункту у місті відправки, доставка
    потягом до 0 відділення у місті отримання та доставки велосипедом до
    пункту отримання.
*/

const Delivery = require('./Delivery');
const BycicleDeliveryType = require('./delivery_type/BycicleDeliveryType');
const TrainDeliveryType = require('./delivery_type/TrainDeliveryType');

module.exports = class StandardDelivery extends Delivery {
    constructor () {
        super()
        this.cityDeliveryType = new BycicleDeliveryType();
        this.intercityDeliveryType = new TrainDeliveryType();
    }
}