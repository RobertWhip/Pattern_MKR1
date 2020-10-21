/* Існують такі види доставки:
    a. Доставка велосипедом.
    b. Доставка автомобілем. +
    c. Доставка потягом.
    d. Доставка літаком.
*/

const DeliveryType = require('./DeliveryType');
const deliveryTypes = require('./delivery_types');

module.exports = class BycicleDeliveryType extends DeliveryType {
    getType() {
        return deliveryTypes.plane;
    }
}