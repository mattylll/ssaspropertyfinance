export interface SsasLtvInputs {
  propertyValue: number;
  ssasFundValue: number;
}

export interface SsasLtvResults {
  maxBorrowing: number;
  depositFromFund: number;
  remainingFund: number;
  totalPurchasePower: number;
  ltvPercent: number;
  fundSufficient: boolean;
}

export function calculateSsasLtv(inputs: SsasLtvInputs): SsasLtvResults {
  const { propertyValue, ssasFundValue } = inputs;

  // SSAS can borrow up to 50% of property value
  const maxBorrowing = propertyValue * 0.5;
  const depositFromFund = propertyValue - maxBorrowing;
  const remainingFund = ssasFundValue - depositFromFund;
  const fundSufficient = remainingFund >= 0;

  return {
    maxBorrowing: Math.round(maxBorrowing),
    depositFromFund: Math.round(depositFromFund),
    remainingFund: Math.round(Math.max(0, remainingFund)),
    totalPurchasePower: Math.round(ssasFundValue * 2),
    ltvPercent: 50,
    fundSufficient,
  };
}
