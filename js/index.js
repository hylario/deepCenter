var tabelaData = [
    'Agentes Logados',
    'Tentativas',
    'Atendidas',
    'CPC',
    'CPCA',
    'Negociações',
    '% Hit/Rate',
    '% CPC / Tentativas',
    '% CPCA / CPC',
    '% NEG / CPC',
    '% NEG / CPCA',
    'Atendidas / Agentes',
    'CPC / Agentes',
    'CPCA / Agentes',
    'Negociações / Agentes',
    'Tentativas / Atendidas',
    'TMA',
    '% Linha Muda',
    '% Voz de Máquina',
    '% Desconhecido',
    '% Improdutivo'
]

$(document).ready(function(){
    for(var i = 1; i <= 5; i++){
        var value = Math.round(Math.random() * 100);

        $('.graph'+i+' progress').val(value);
        $('.graph'+i+' .graphContent .value').html(Math.round(Math.random() * 50000));

        var myDoughnutChart = new Chart($('.graph'+i+' .grafico'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: [
                        '#7d901a'
                    ]
                }],
                labels: [
                    'Grafico'
                ]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    }

    $.each(tabelaData, function(i,v){
        var tr = $('<tr>');
        
        tr.append($('<td style="text-align:left;">').html(v));
        tr.append($('<td style="font-weight:bold;">').html(Math.round(Math.random() * 27)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        tr.append($('<td>').html(Math.round(Math.random() * 17)));
        $('.tabela tbody').append(tr);
    });
});