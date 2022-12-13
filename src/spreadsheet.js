const { GoogleSpreadsheet } = require("google-spreadsheet");

const credenciales = require('./json/credenciales.json');

let googleId = "15AJCYJom_w6TEulTlchIokPEMsZC8dH4CEcgJviAzH0";

/**async function accederGoogleSheet() {

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[0];
    const registros = await sheet.getRows();

    return registros;
}**/

async function guardarPermiso(pObjeto) {
    try {
        console.log(pObjeto);
        const documento = new GoogleSpreadsheet(googleId);
        await documento.useServiceAccountAuth(credenciales);
        await documento.loadInfo();
        const sheet = documento.sheetsById[0];

        await sheet.addRow(pObjeto);
    } catch (error) {
        console.log('eso no salió bien')
        throw error;
    }
}


module.exports = {
    guardarPermiso: guardarPermiso
}