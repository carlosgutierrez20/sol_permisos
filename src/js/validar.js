function validar() {

    $("form[id='form']").validate({

        rules: {
            nombre_completo: "required",

            cedula: "required",

            correo_electronico: {
                required: true,
                email: true
            },

            Fecha_permiso: "required",

            descripcion: "required",

            inicio_permiso: "required",

            fin_permiso: "required",

            total: "required",

        },

        messages: {
            nombre_completo: "El campo nombre completo es obligatorio",
            correo_electronico: {
                required: "el correo eléctronico es un campo obligatorio",
                email: "la dirección de correo no es valida"
            },
            fecha_permiso: "La fecha del permiso es un campo obligatorio",
            descripcion: "la descripción del permiso es un campo obligatorio",
            inicio_permiso: "la hora de inicio del permiso es un campo obligatorio",
            fin_permiso: "la fecha ",

        },

    })

    if ($("#fecha_reposicion1").val().length < 1) {
        alert("Diligencie el campo de reposición");
        return false;
    } else {
        if ($("#fecha_reposicion2").val().length < 1) {
            $("#reposicion").val("Fecha de reposición: " + $("#fecha_reposicion1").val() + "  hora inicio:" + $("#inicio_reposicion1").val() + "  Hora fin: " + $("#fin_reposicion1").val() + "  Actividades: " + $("#actividade1").val() + " Total horas: " + $("#total_hora1").val());
        } else {
            if ($("#fecha_reposicion3").val().length < 1) {
                $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                    '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() + '")');
            } else {
                if ($("#fecha_reposicion4").val().length < 1) {
                    $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() + '")');
                } else {
                    if ($("#fecha_reposicion5").val().length < 1) {
                        $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() + '")');
                    } else {
                        if ($("#fecha_reposicion6").val().length < 1) {
                            $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() +
                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion5').val() + '  hora inicio: ' + $('#inicio_reposicion5').val() + '  Hora fin: ' + $('#fin_reposicion5').val() + '  Actividades: ' + $('#actividade5').val() + ' Total horas: ' + $('#total_hora5').val() + '")');
                        } else {
                            if ($("#fecha_reposicion7").val().length < 1) {
                                $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                                    '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                                    '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                                    '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() +
                                    '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion5').val() + '  hora inicio: ' + $('#inicio_reposicion5').val() + '  Hora fin: ' + $('#fin_reposicion5').val() + '  Actividades: ' + $('#actividade5').val() + ' Total horas: ' + $('#total_hora5').val() +
                                    '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion6').val() + '  hora inicio: ' + $('#inicio_reposicion6').val() + '  Hora fin: ' + $('#fin_reposicion6').val() + '  Actividades: ' + $('#actividade6').val() + ' Total horas: ' + $('#total_hora6').val() + '")');
                            } else {
                                if ($("#fecha_reposicion8").val().length < 1) {
                                    $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() +
                                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion5').val() + '  hora inicio: ' + $('#inicio_reposicion5').val() + '  Hora fin: ' + $('#fin_reposicion5').val() + '  Actividades: ' + $('#actividade5').val() + ' Total horas: ' + $('#total_hora5').val() +
                                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion6').val() + '  hora inicio: ' + $('#inicio_reposicion6').val() + '  Hora fin: ' + $('#fin_reposicion6').val() + '  Actividades: ' + $('#actividade6').val() + ' Total horas: ' + $('#total_hora6').val() +
                                        '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion7').val() + '  hora inicio: ' + $('#inicio_reposicion7').val() + '  Hora fin: ' + $('#fin_reposicion7').val() + '  Actividades: ' + $('#actividade7').val() + ' Total horas: ' + $('#total_hora7').val() + '")');
                                } else {
                                    if ($("#fecha_reposicion9").val().length < 1) {
                                        $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion5').val() + '  hora inicio: ' + $('#inicio_reposicion5').val() + '  Hora fin: ' + $('#fin_reposicion5').val() + '  Actividades: ' + $('#actividade5').val() + ' Total horas: ' + $('#total_hora5').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion6').val() + '  hora inicio: ' + $('#inicio_reposicion6').val() + '  Hora fin: ' + $('#fin_reposicion6').val() + '  Actividades: ' + $('#actividade6').val() + ' Total horas: ' + $('#total_hora6').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion7').val() + '  hora inicio: ' + $('#inicio_reposicion7').val() + '  Hora fin: ' + $('#fin_reposicion7').val() + '  Actividades: ' + $('#actividade7').val() + ' Total horas: ' + $('#total_hora7').val() +
                                            '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion8').val() + '  hora inicio: ' + $('#inicio_reposicion8').val() + '  Hora fin: ' + $('#fin_reposicion8').val() + '  Actividades: ' + $('#actividade8').val() + ' Total horas: ' + $('#total_hora8').val() + '")');
                                    } else {
                                        if ($("#fecha_reposicion10").val().length < 1) {
                                            $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion5').val() + '  hora inicio: ' + $('#inicio_reposicion5').val() + '  Hora fin: ' + $('#fin_reposicion5').val() + '  Actividades: ' + $('#actividade5').val() + ' Total horas: ' + $('#total_hora5').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion6').val() + '  hora inicio: ' + $('#inicio_reposicion6').val() + '  Hora fin: ' + $('#fin_reposicion6').val() + '  Actividades: ' + $('#actividade6').val() + ' Total horas: ' + $('#total_hora6').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion7').val() + '  hora inicio: ' + $('#inicio_reposicion7').val() + '  Hora fin: ' + $('#fin_reposicion7').val() + '  Actividades: ' + $('#actividade7').val() + ' Total horas: ' + $('#total_hora7').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion8').val() + '  hora inicio: ' + $('#inicio_reposicion8').val() + '  Hora fin: ' + $('#fin_reposicion8').val() + '  Actividades: ' + $('#actividade8').val() + ' Total horas: ' + $('#total_hora8').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion9').val() + '  hora inicio: ' + $('#inicio_reposicion9').val() + '  Hora fin: ' + $('#fin_reposicion9').val() + '  Actividades: ' + $('#actividade9').val() + ' Total horas: ' + $('#total_hora9').val() + '")');
                                        } else {
                                            $("#reposicion").val('=CONCATENAR("Fecha de reposición: ' + $('#fecha_reposicion1').val() + '  hora inicio:' + $('#inicio_reposicion1').val() + '  Hora fin: ' + $('#fin_reposicion1').val() + ' Actividades: ' + $('#actividade1').val() + ' Total horas: ' + $('#total_hora1').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion2').val() + '  hora inicio: ' + $('#inicio_reposicion2').val() + '  Hora fin: ' + $('#fin_reposicion2').val() + '  Actividades: ' + $('#actividade2').val() + ' Total horas: ' + $('#total_hora2').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion3').val() + '  hora inicio: ' + $('#inicio_reposicion3').val() + '  Hora fin: ' + $('#fin_reposicion3').val() + '  Actividades: ' + $('#actividade3').val() + ' Total horas: ' + $('#total_hora3').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion4').val() + '  hora inicio: ' + $('#inicio_reposicion4').val() + '  Hora fin: ' + $('#fin_reposicion4').val() + '  Actividades: ' + $('#actividade4').val() + ' Total horas: ' + $('#total_hora4').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion5').val() + '  hora inicio: ' + $('#inicio_reposicion5').val() + '  Hora fin: ' + $('#fin_reposicion5').val() + '  Actividades: ' + $('#actividade5').val() + ' Total horas: ' + $('#total_hora5').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion6').val() + '  hora inicio: ' + $('#inicio_reposicion6').val() + '  Hora fin: ' + $('#fin_reposicion6').val() + '  Actividades: ' + $('#actividade6').val() + ' Total horas: ' + $('#total_hora6').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion7').val() + '  hora inicio: ' + $('#inicio_reposicion7').val() + '  Hora fin: ' + $('#fin_reposicion7').val() + '  Actividades: ' + $('#actividade7').val() + ' Total horas: ' + $('#total_hora7').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion8').val() + '  hora inicio: ' + $('#inicio_reposicion8').val() + '  Hora fin: ' + $('#fin_reposicion8').val() + '  Actividades: ' + $('#actividade8').val() + ' Total horas: ' + $('#total_hora8').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion9').val() + '  hora inicio: ' + $('#inicio_reposicion9').val() + '  Hora fin: ' + $('#fin_reposicion9').val() + '  Actividades: ' + $('#actividade9').val() + ' Total horas: ' + $('#total_hora9').val() +
                                                '";CARACTER(10);"' + ' Fecha de reposición: ' + $('#fecha_reposicion10').val() + '  hora inicio: ' + $('#inicio_reposicion10').val() + '  Hora fin: ' + $('#fin_reposicion10').val() + '  Actividades: ' + $('#actividade10').val() + ' Total horas: ' + $('#total_hora10').val() + '")');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    var tot = Number($("#total").val());
    var totrep1 = Number($("#total_hora1").val());
    var totrep2 = Number($("#total_hora2").val());
    var totrep3 = Number($("#total_hora3").val());
    var totrep4 = Number($("#total_hora4").val());
    var totrep5 = Number($("#total_hora5").val());
    var totrep6 = Number($("#total_hora6").val());
    var totrep7 = Number($("#total_hora7").val());
    var totrep8 = Number($("#total_hora8").val());
    var totrep9 = Number($("#total_hora9").val());
    var totrep10 = Number($("#total_hora10").val());

    var sumatot = totrep1 + totrep2 + totrep3 + totrep4 + totrep5 + totrep6 + totrep7 + totrep8 + totrep9 + totrep10;

    console.log(sumatot);

    if (tot == sumatot) {
        return true;
    } else {
        alert("El total de horas de permiso no concuerda con el total de horas a compensar" + sumatot);

        return false;
    }
}