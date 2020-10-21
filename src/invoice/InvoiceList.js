/* 
    Доставка відбувається 1 раз на добу, тому спочатку формується список
    доставки – масив що містить накладні.
    Система повинна реалізувати такий набір дій:
    a. Додавання накладної до списку доставки.
    b. Доставка усіх накладних.
*/

module.exports = class InvoiceList {
    // a. Додавання накладної до списку доставки.
    constructor (invoiceList){
        this.invoiceList = invoiceList;
	}
    
    // a. Додавання накладної до списку доставки.
    push(invoice) {
        this.invoiceList.push(invoice);
    }

    // b. Доставка усіх накладних.
    deliverAll() {
        const result = [];

        for (let i = 0; i < this.invoiceList.length; i++) {
            result.push(`Sending invoce at index ${i}:`);
            result.push('Invoice data:');
            result.push(this.invoiceList[i].toString());
            result.push('Delivery data:');
            result.push(this.invoiceList[i].deliver());
            result.push('');
        }

        return result.join('\n');
    }
}