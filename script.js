function calcularLucro() {
  const valorGasolina = parseFloat(document.getElementById('precoGasolina').value);
  const valorCorrida = parseFloat(document.getElementById('valorCorrida').value);
  const distancia = parseFloat(document.getElementById('distancia').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(valorGasolina) || isNaN(valorCorrida) || isNaN(distancia)) {
    resultado.className = 'alert alert-danger mt-4';
    resultado.innerHTML = 'Por favor, preencha todos os campos corretamente.';
    return;
  }

  const consumoKmPorLitro = 35;
  const custoGasolinaPorKm = valorGasolina / consumoKmPorLitro;

  const custoOleo = 0.02;
  const custoPneu = 0.033;
  const custoManutencao = 0.03;

  const custoTotalPorKm = custoGasolinaPorKm + custoOleo + custoPneu + custoManutencao;
  const gastoTotal = distancia * custoTotalPorKm;
  const lucro = valorCorrida - gastoTotal;
  const percentualLucro = (lucro / valorCorrida) * 100;

  let classificacao = '', corClasse = '', emoji = '';

  if (percentualLucro >= 70) {
    classificacao = 'Excelente - Só vai';
    corClasse = 'success';
    emoji = '✅';
  } else if (percentualLucro >= 60) {
    classificacao = 'Boa - Vale a pena';
    corClasse = 'primary';
    emoji = '👍';
  } else if (percentualLucro >= 50) {
    classificacao = 'Aceitável - Só se estiver perto';
    corClasse = 'warning';
    emoji = '⚠️';
  } else if (percentualLucro >= 40) {
    classificacao = 'Ruim - Só se estiver parado, pra meter o pé';
    corClasse = 'danger';
    emoji = '❌';
  } else {
    classificacao = 'Péssimo - Cê é loko, num compensa';
    corClasse = 'dark';
    emoji = '🚫';
  }

  resultado.className = 'mt-4';
  resultado.innerHTML = `
    <div class="card border-${corClasse}">
      <div class="card-header bg-${corClasse} text-white">
        Avaliação da Corrida ${emoji}
      </div>
      <div class="card-body">
        <p><strong>Gasto estimado:</strong> R$ ${gastoTotal.toFixed(2)}</p>
        <p><strong>Lucro líquido:</strong> R$ ${lucro.toFixed(2)}</p>
        <hr>
        <h5 class="card-title">${percentualLucro.toFixed(1)}% de lucro</h5>
        <p class="card-text">${classificacao}</p>
      </div>
    </div>
  `;
}
