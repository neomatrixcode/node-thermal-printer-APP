const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: 'tcp://192.168.0.20'
});

//printer.alignCenter();
printer.println(`Hola mundo!
Printer Ethernet Interface Test:

               TEST  START


                   /
                  ///
                 /////
                ///////
               /////////
              ///////////
             //********///
            //***********//
           //*****///****///
          ///***///////***///
         ///***////////***////
        ////***////////////////
       /////**//////////////////
      //////**/////*******///////
       /////**/////*******//////
        ////***/////////**/////
         ///***/////////**////
          ///***///////***///
           //*****///*****//
            //***********//
             ///********//
              ///////////
               /////////
                ///////
                 /////
                  ///
                   /
               TEST  COMPLETED
  `);
//printer.printImage('olaii-logo-black.png')


printer.printQR("Neomatrix", {
    cellSize: 3,             // 1 - 8
    correction: 'M',         // L(7%), M(15%), Q(25%), H(30%)
    model: 2                 // 1 - Model 1
                             // 2 - Model 2 (standard)
                             // 3 - Micro QR
});

printer.pdf417("PDF417", {
    rowHeight: 3,            // 2 - 8
    width: 3,                // 2 - 8
    correction: 1,           // Ratio: 1 - 40
    truncated: false,        // boolean
    columns: 0               // 1 - 30, 0 auto
});

printer.cut();

try {
  let execute = printer.execute()
  console.error("Print done!");
} catch (error) {
  console.log("Print failed:", error);
}