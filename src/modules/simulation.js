const moment = require('moment');

const MONTHS_PER_PERIOD = 12;

const simulate = (installment, periods, interest, tax) => {
  let runningTotal = 0;
  const simulation = [];
  const actualInvestment = installment * (1 - tax);
  const startDate = moment().startOf('month');

  for (let i = 0; i < periods * MONTHS_PER_PERIOD; i++) {
    runningTotal = computeSomething(actualInvestment, runningTotal, interest / MONTHS_PER_PERIOD);
    const runningInvestment = installment * (i + 1);
    const growth = runningTotal / runningInvestment - 1;
    const growthPct = growth * 100;
    const currentDate = moment(startDate);
    currentDate.add(i, 'months');

    simulation.push({
      date: currentDate,
      invested: runningInvestment,
      value: runningTotal,
      growth: growthPct,
    });
  }
  return simulation;
};

const computeSomething = (installment, runningTotal, interest) => {
  return runningTotal * (1 + interest) + installment;
};

module.exports = simulate;
