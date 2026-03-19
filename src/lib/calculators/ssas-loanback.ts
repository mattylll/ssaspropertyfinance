export interface SsasLoanbackInputs {
  fundValue: number;
  loanAmount: number;
  interestRate: number;
  termYears: number;
}

export interface SsasLoanbackResults {
  maxPermittedLoan: number;
  requestedLoan: number;
  isCompliant: boolean;
  monthlyRepayment: number;
  totalRepayment: number;
  totalInterest: number;
  hmrcMaxTerm: number;
  repaymentSchedule: SsasRepaymentRow[];
}

export interface SsasRepaymentRow {
  year: number;
  openingBalance: number;
  repayment: number;
  interestPaid: number;
  principalPaid: number;
  closingBalance: number;
}

export function calculateSsasLoanback(inputs: SsasLoanbackInputs): SsasLoanbackResults {
  const { fundValue, loanAmount, interestRate, termYears } = inputs;

  // HMRC rules: max 50% of fund value, max 5 year term
  const maxPermittedLoan = fundValue * 0.5;
  const hmrcMaxTerm = 5;
  const cappedTerm = Math.min(termYears, hmrcMaxTerm);
  const isCompliant = loanAmount <= maxPermittedLoan && termYears <= hmrcMaxTerm;

  const actualLoan = Math.min(loanAmount, maxPermittedLoan);
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = cappedTerm * 12;

  let monthlyRepayment: number;
  if (monthlyRate === 0) {
    monthlyRepayment = actualLoan / totalPayments;
  } else {
    monthlyRepayment =
      (actualLoan * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }

  const totalRepayment = monthlyRepayment * totalPayments;
  const totalInterest = totalRepayment - actualLoan;

  const repaymentSchedule: SsasRepaymentRow[] = [];
  let balance = actualLoan;

  for (let year = 1; year <= cappedTerm; year++) {
    const openingBalance = balance;
    let yearInterest = 0;
    let yearPrincipal = 0;

    for (let month = 0; month < 12; month++) {
      const interest = balance * monthlyRate;
      const principal = monthlyRepayment - interest;
      yearInterest += interest;
      yearPrincipal += principal;
      balance -= principal;
    }

    repaymentSchedule.push({
      year,
      openingBalance: Math.round(openingBalance),
      repayment: Math.round(monthlyRepayment * 12),
      interestPaid: Math.round(yearInterest),
      principalPaid: Math.round(yearPrincipal),
      closingBalance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    maxPermittedLoan: Math.round(maxPermittedLoan),
    requestedLoan: Math.round(actualLoan),
    isCompliant,
    monthlyRepayment: Math.round(monthlyRepayment * 100) / 100,
    totalRepayment: Math.round(totalRepayment),
    totalInterest: Math.round(totalInterest),
    hmrcMaxTerm,
    repaymentSchedule,
  };
}
