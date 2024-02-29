'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const monthsBr = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    const tableDays = document.getElementById('dias')
    function GetDayCalender(mes, ano) {

        document.getElementById('mes').innerHTML = monthsBr[mes];
        document.getElementById('ano').innerHTML = ano;

        let firstDayOfWeek = new Date(ano, mes, 1).getDay()-1;
        let lastDayOfMonth = new Date(ano, mes+1, 0).getDate();

    }
    GetDayCalender(2, 2024);
})