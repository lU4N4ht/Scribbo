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
    const tableDays = document.getElementById('dias');
    function GetDayCalender(mes, ano) {

        if (mes > 11) {
            ano++;
            mes = 0;
        } else if (mes < 0) {
            ano--;
            mes = 11;
        }

        document.getElementById('mes').innerHTML = monthsBr[mes];
        document.getElementById('ano').innerHTML = ano;

        let firstDayOfWeek = new Date(ano, mes, 1).getDay()-1;
        let lastDayOfMonth = new Date(ano, mes+1, 0).getDate();

        for (var i = -firstDayOfWeek, index = 0; i < (42-firstDayOfWeek); i++, index++){
            let dt = new Date(ano, mes, i);
            let dtNow = new Date();
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('mes-anterior', 'proximo-mes','dia-atual'); 
            dayTable.innerHTML = dt.getDate();

            if(dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()){
                dayTable.classList.add('dia-atual');
            }

            if(i < 1){
                dayTable.classList.add('mes-anterior');
            }
            if(i > lastDayOfMonth){
                dayTable.classList.add('proximo-mes');
            }
        }
    }

    let now = new Date();
    let mes = now.getMonth();
    let ano = now.getFullYear();
    GetDayCalender(mes, ano);

    const botao_anterior = document.getElementById('btn_prev');
    const botao_proximo = document.getElementById('btn_next');

    botao_proximo.onclick = function(){
        mes++;
        if(mes > 11){
            mes = 0;
            ano++;
        }
        GetDayCalender(mes, ano);
    };
    botao_anterior.onclick = function(){
        mes--;
        if(mes < 0){
            mes = 11;
            ano--;
        }
        GetDayCalender(mes, ano);
    };
});