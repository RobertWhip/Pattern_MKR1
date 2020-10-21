const Department = require('./src/department/Department');
const Invoice = require('./src/invoice/Invoice');
const InvoiceList = require('./src/invoice/InvoiceList');
const StandardDelivery = new (require('./src/delivery/StandardDelivery'))();
const ExpressDelivery = new (require('./src/delivery/ExpressDelivery'))();

// declare departments
const UzhhorodFirst = new Department(1, 'Uzhhorod');
const LvivFourth = new Department(4, 'Lviv');
const UzhhorodSeventh = new Department(7, 'Uzhhorod');
const KievEighth = new Department(8, 'Kiev');

// create invoices
const invoicesList = new InvoiceList([
        new Invoice('Ivan sends to Petro', UzhhorodFirst, UzhhorodSeventh) // StandardDelivery by default
    ]);

invoicesList.push(new Invoice('Masha sends to Sergey', UzhhorodFirst, LvivFourth, StandardDelivery));
invoicesList.push(new Invoice('Sergey sends to Masha', UzhhorodSeventh, KievEighth, ExpressDelivery));
invoicesList.push(new Invoice('Ivan sends to Masha', KievEighth, LvivFourth, ExpressDelivery));
invoicesList.push(new Invoice('Ivan sends to Sergey', LvivFourth, UzhhorodFirst));

// deliver
const deliveryResult = invoicesList.deliverAll();
console.log(deliveryResult);

