const { getMaxListeners } = require('process');
let googleSheet = require('../spreadsheet');
const nodemailer = require('nodemailer');
const pintarForm = (req, res) => {
    res.render('form', {});
}

const  guardarPermiso = async(req, res) => {

    const{ nombre_completo, cedula, correo_electronico, jefe_inmediato, tipo_de_permiso, Fecha_permiso, Fecha_fin_permiso, descripcion, inicio_permiso, fin_permiso, total, reposicion} = req.body;

    try {
        googleSheet.guardarPermiso(req.body);
        res.redirect('/');
    } catch (error) {
        console.log('Algo no salió bien');
        throw error;
    }

    contentHTML = `<h1>Solicitud de permiso</h1>
        <br>
        <h3>Información Personal</h3>
        <ul>
            <li>Nombre completo: ${nombre_completo}</li>
            <li>Cedula: ${cedula}</li>
            <li>Correo electronico: ${correo_electronico}</li>
            <li>Jefe Inmediato: ${jefe_inmediato}</li>
            <li>Tipo de permiso: ${tipo_de_permiso}</li>
            <li>Fecha inicio permiso: ${Fecha_permiso}</li>
            <li>Fecha fin permiso: ${Fecha_fin_permiso}</li>
        </ul>
        <br>
        <h3>Horario del permiso</h3>
        <ul>
            <li>Inicio del permiso: ${inicio_permiso}</li>
            <li>Fin del permiso: ${fin_permiso}</li>
            <li>Total Horas: ${total}</li>
        </ul>
        <p>Descripción: ${descripcion}</p>
        <p>Ver detalles del permiso: https://docs.google.com/spreadsheets/d/15AJCYJom_w6TEulTlchIokPEMsZC8dH4CEcgJviAzH0/edit?usp=sharing</p>
        `;

        console.log(contentHTML);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'solpermisoseyl@gmail.com', // generated ethereal user
              pass: 'quwvkepigqjwzcar', // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            } 
        });

        await transporter.sendMail({
            from: "Equipos y Laboratorio solpermisoseyl@gmail.com",
            to: jefe_inmediato +";"+correo_electronico,
            cc: 'catalinagoez@equiposylaboratorio.com; danieldiaz@equiposylaboratorio.com; johanamorales@equiposylaboratorio.com; vivianazapata@equiposylaboratorio.com; seleccionequiposylaboratorio@gmail.com',
            subject: 'Nueva solicitud de permiso.',
            html: contentHTML
        })


}
    

module.exports = {
    pintarForm: pintarForm,
    guardarPermiso: guardarPermiso
}