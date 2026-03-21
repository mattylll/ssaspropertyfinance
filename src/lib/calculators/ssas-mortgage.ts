export interface SsasMortgageInputs {
  propertyValue: number;
  ssasFundValue: number;
  ltvPercent: number;
  interestRate: number;
  termYears: number;
}

export interface SsasMortgageResults {
  maxLoan: number;
  monthlyPayment: number;
  totalCost: number;
  totalInterest: number;
  ltvActual: number;
  depositRequired: number;
  amortisationSchedule: AmortisationRow[];
}

export interface AmortisationRow {
  year: number;
  openingBalance: number;
  annualPayment: number;
  interestPaid: number;
  principalPaid: number;
  closingBalance: number;
}

export function calculateSsasMortgage(inputs: SsasMortgageInputs): SsasMortgageResults {
  const { propertyValue, ssasFundValue, ltvPercent, interestRate, termYears } = inputs;

  const cappedLtv = Math.min(ltvPercent, 50);
  const maxLoan = (propertyValue * cappedLtv) / 100;
  const depositRequired = propertyValue - maxLoan;

  if (depositRequired > ssasFundValue) {
    // Fund insufficient — still calculate but flag
  }

  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = termYears * 12;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = maxLoan / totalPayments;
  } else {
    monthlyPayment =
      (maxLoan * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }

  const totalCost = monthlyPayment * totalPayments;
  const totalInterest = totalCost - maxLoan;

  const amortisationSchedule: AmortisationRow[] = [];
  let balance = maxLoan;

  for (let year = 1; year <= termYears; year++) {
    const openingBalance = balance;
    let yearInterest = 0;
    let yearPrincipal = 0;

    for (let month = 0; month < 12; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      yearInterest += interestPayment;
      yearPrincipal += principalPayment;
      balance -= principalPayment;
    }

    amortisationSchedule.push({
      year,
      openingBalance: Math.round(openingBalance),
      annualPayment: Math.round(monthlyPayment * 12),
      interestPaid: Math.round(yearInterest),
      principalPaid: Math.round(yearPrincipal),
      closingBalance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    maxLoan: Math.round(maxLoan),
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalCost: Math.round(totalCost),
    totalInterest: Math.round(totalInterest),
    ltvActual: cappedLtv,
    depositRequired: Math.round(depositRequired),
    amortisationSchedule,
  };
}
