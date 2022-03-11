
export interface PayGroup {
  name: string;
  grossPerMonth: number;
  hoursPerWeek: number;
  // if this paygroup is regarded as the "Eckentgelt", which is sometimes used to calculate bonuses.
  // think of it as the 100% baseline or average.
  basicRenumeration?: boolean;
  visible: boolean;
}

export const PAY_GROUPS: PayGroup[] = [
  // {
  //   name: "EG 1",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 2398.00
  // visible: true,
  // },
  // {
  //   name: "EG 2",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 2592.50
  // visible: true,
  // },
  // {
  //   name: "EG 3",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 2463.00
  // visible: true,
  // },
  // {
  //   name: "EG 4",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 2722.00
  // visible: true,
  // },
  // {
  //   name: "EG 5",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 2884.00
  // visible: true,
  // },
  // {
  //   name: "EG 6",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 3046.00
  // visible: true,
  // },
  // {
  //   name: "EG 7",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 3240.50,
  // visible: true,
  //   basicRenumeration: true
  // },
  // {
  //   name: "EG 8",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 3467.50
  // visible: true,
  // },
  // {
  //   name: "EG 9",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 3694.50
  // visible: true,
  // },
  // {
  //   name: "EG 10",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 3937.50
  // visible: true,
  // },
  // {
  //   name: "EG 11",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 4196.50
  // visible: true,
  // },
  {
    name: "EG 12",
    hoursPerWeek: 35,
    grossPerMonth: 4488.00,
    visible: true,
  },
  {
    name: "EG 13",
    hoursPerWeek: 35,
    grossPerMonth: 4780.00,
    visible: true,
  },
  {
    name: "EG 14",
    hoursPerWeek: 35,
    grossPerMonth: 5071.50,
    visible: true,
  },
  {
    name: "EG 15",
    hoursPerWeek: 35,
    grossPerMonth: 5363.00,
    visible: true,
  },
  {
    name: "EG 16",
    hoursPerWeek: 35,
    grossPerMonth: 5719.50,
    visible: true,
  },
  // {
  //   name: "EG 17",
  //   hoursPerWeek: 35,
  //   grossPerMonth: 6043.50,
  //   visible: false,
  // },
]

export const WEEKLY_HOURS: number[] = [
  35,
  40
];

export const PERFORMANCE_BONUS_MIN_PERCENTAGE = 10;
export const PERFORMANCE_BONUS_MAX_PERCENTAGE = 20;
export const PERFORMANCE_BONUS_PERCENTAGE_STEP = 1;
export const DEFAULT_PERFORMANCE_BONUS_PERCENTAGE = 10.0;

export const T_ZUG_A_PERCENTAGE_OF_GROSS = 27.5;
export const ERA_BASIC_RENUMERATION: PayGroup = {
  name: "EG 7",
  hoursPerWeek: 35,
  grossPerMonth: 3240.50,
  visible: true,
  basicRenumeration: true
};
export const T_ZUG_B_PERCENTAGE_OF_BASIC_RENUMERATION = 12.3;
export const TRANSFORMATION_BONUS_PERCENTAGE_OF_GROSS = 27.6;
export const HOLIDAY_BONUS_PERCENTAGE_OF_GROSS = 70;

export interface ChristmasBonus {
  name: string;
  minimumMonthsOfService: number;
  percentageOfGross: number;
}

export const CHRISTMAS_BONUS_GRADUATIONS: ChristmasBonus[] = [
  {
    name: "6 Monate",
    minimumMonthsOfService: 6,
    percentageOfGross: 25
  },
  {
    name: "12 Monate",
    minimumMonthsOfService: 12,
    percentageOfGross: 35
  },
  {
    name: "24 Monate",
    minimumMonthsOfService: 24,
    percentageOfGross: 45
  }, {
    name: "36 Monate",
    minimumMonthsOfService: 36,
    percentageOfGross: 55
  }
];

export interface Wage {
  payGroup: PayGroup,
  entryDate: Date;
  performanceBonusPercentage?: number;
  hoursPerWeek: number;
}

export enum WageMonth {
  JANUARY = "JANUARY",
  FEBRUARY = "FEBRUARY",
  MARCH = "MARCH",
  APRIL = "APRIL",
  MAY = "MAY",
  JUNE = "JUNE",
  JULY = "JULY",
  AUGUST = "AUGUST",
  SEPTEMBER = "SEPTEMBER",
  OCTOBER = "OCTOBER",
  NOVEMBER = "NOVEMBER",
  DECEMBER = "DECEMBER"
}

export function getWageMonth(date: Date): WageMonth {
  switch (date.getMonth()) {
    case 0:
      return WageMonth.JANUARY;
    case 1:
      return WageMonth.FEBRUARY;
    case 2:
      return WageMonth.MARCH;
    case 3:
      return WageMonth.APRIL;
    case 4:
      return WageMonth.MAY;
    case 5:
      return WageMonth.JUNE;
    case 6:
      return WageMonth.JULY;
    case 7:
      return WageMonth.AUGUST;
    case 8:
      return WageMonth.SEPTEMBER;
    case 9:
      return WageMonth.OCTOBER;
    case 10:
      return WageMonth.NOVEMBER;
    case 11:
      return WageMonth.DECEMBER;
    default:
      return WageMonth.JANUARY;
  }
}

export function getDateForFirstOfMonth(year: number, wageMonth: WageMonth) {
  switch (wageMonth) {
    case WageMonth.JANUARY:
      return new Date(year, 0, 1);
    case WageMonth.FEBRUARY:
      return new Date(year, 1, 1);
    case WageMonth.MARCH:
      return new Date(year, 2, 1);
    case WageMonth.APRIL:
      return new Date(year, 3, 1);
    case WageMonth.MAY:
      return new Date(year, 4, 1);
    case WageMonth.JUNE:
      return new Date(year, 5, 1);
    case WageMonth.JULY:
      return new Date(year, 6, 1);
    case WageMonth.AUGUST:
      return new Date(year, 7, 1);
    case WageMonth.SEPTEMBER:
      return new Date(year, 8, 1);
    case WageMonth.OCTOBER:
      return new Date(year, 9, 1);
    case WageMonth.NOVEMBER:
      return new Date(year, 10, 1);
    case WageMonth.DECEMBER:
      return new Date(year, 11, 1);
  }
}

export interface WagesForYear {
  year: number;
  wagesPerMonth: { [key in WageMonth]?: Wage }
}

export function buildWagesForYearByWage(year: number, wage: Wage): WagesForYear {
  return {
    year: year,
    wagesPerMonth: {
      JANUARY: wage,
      FEBRUARY: wage,
      MARCH: wage,
      APRIL: wage,
      MAY: wage,
      JUNE: wage,
      JULY: wage,
      AUGUST: wage,
      SEPTEMBER: wage,
      OCTOBER: wage,
      NOVEMBER: wage,
      DECEMBER: wage,
    }
  };
}

export interface GrossTotal {
  total: number;
  performanceBonus: number;
  tZugABonus: number;
  tZugBBonus: number;
  trafoBonus: number;
  holidayBonus: number;
  christmasBonus: number;
  christmasBonusPercentage: number;
}

export function calculateWageGrossForMonth(wage: Wage, month: WageMonth, year: number): GrossTotal {
  const normalizedGrossPerMonth = (wage.payGroup.grossPerMonth / wage.payGroup.hoursPerWeek) * wage.hoursPerWeek;
  const performanceBonus = normalizedGrossPerMonth * ((wage.performanceBonusPercentage ?? 0) / 100)
  const grossWithPerformanceBonus = normalizedGrossPerMonth + performanceBonus;
  let grossWithAllBonuses = grossWithPerformanceBonus;
  let trafoBonus = 0;
  let tZugABonus = 0;
  let tZugBBonus = 0;
  let holidayBonus = 0;
  let christmasBonusGross = 0;
  let christmasBonusPercentage = 0;
  if (month == WageMonth.FEBRUARY) {
    // TRANSFORMATION BONUS
    trafoBonus = grossWithPerformanceBonus * (TRANSFORMATION_BONUS_PERCENTAGE_OF_GROSS / 100)
    grossWithAllBonuses += trafoBonus;
  }
  if (month == WageMonth.JUNE) {
    // T-ZUG
    tZugABonus = grossWithPerformanceBonus * (T_ZUG_A_PERCENTAGE_OF_GROSS / 100)
    grossWithAllBonuses += tZugABonus;
    tZugBBonus = ERA_BASIC_RENUMERATION.grossPerMonth * (T_ZUG_B_PERCENTAGE_OF_BASIC_RENUMERATION / 100)
    grossWithAllBonuses += tZugBBonus;
  }
  if (month == WageMonth.JULY) {
    // HOLIDAY BONUS
    holidayBonus = grossWithPerformanceBonus * (HOLIDAY_BONUS_PERCENTAGE_OF_GROSS / 100)
    grossWithAllBonuses += holidayBonus;
  }
  if (month == WageMonth.NOVEMBER) {
    // CHRISTMAS BONUS
    const currentMonth = getDateForFirstOfMonth(year, month);
    const currentMonthsOfService = monthDiff(wage.entryDate, currentMonth);
    const christmasBonus: ChristmasBonus | undefined = CHRISTMAS_BONUS_GRADUATIONS
      .sort(function (a, b) {
        return a.minimumMonthsOfService - b.minimumMonthsOfService
      })
      .find(value => currentMonthsOfService >= value.minimumMonthsOfService)
    if (christmasBonus) {
      christmasBonusPercentage = christmasBonus.percentageOfGross;
      christmasBonusGross = grossWithPerformanceBonus * (christmasBonus.percentageOfGross / 100)
      grossWithAllBonuses += christmasBonusGross;
    }
  }
  return {
    total: grossWithAllBonuses,
    christmasBonus: christmasBonusGross,
    christmasBonusPercentage: christmasBonusPercentage,
    performanceBonus: performanceBonus,
    trafoBonus: trafoBonus,
    tZugABonus: tZugABonus,
    tZugBBonus: tZugBBonus,
    holidayBonus: holidayBonus
  };
}

export function calculateWageGrossForYear(wages: WagesForYear): GrossTotal {
  let wageGrossTotal: GrossTotal = {
    total: 0,
    christmasBonus: 0,
    christmasBonusPercentage: 0,
    performanceBonus: 0,
    trafoBonus: 0,
    tZugABonus: 0,
    tZugBBonus: 0,
    holidayBonus: 0
  };
  for (const wagesPerMonthKey in wages.wagesPerMonth) {
    const wageMonth = wagesPerMonthKey as WageMonth
    const wage = wages.wagesPerMonth[wageMonth];
    if (wage) {
      const wageGrossTotalMonth = calculateWageGrossForMonth(wage, wageMonth, wages.year)
      wageGrossTotal.total += wageGrossTotalMonth.total;
      wageGrossTotal.christmasBonus += wageGrossTotalMonth.christmasBonus;
      wageGrossTotal.christmasBonusPercentage += wageGrossTotalMonth.christmasBonusPercentage;
      wageGrossTotal.performanceBonus += wageGrossTotalMonth.performanceBonus;
      wageGrossTotal.trafoBonus += wageGrossTotalMonth.trafoBonus;
      wageGrossTotal.tZugABonus += wageGrossTotalMonth.tZugABonus;
      wageGrossTotal.tZugBBonus += wageGrossTotalMonth.tZugBBonus;
      wageGrossTotal.holidayBonus += wageGrossTotalMonth.holidayBonus;
    }
  }
  return wageGrossTotal;
}

export function monthDiff(d1: Date, d2: Date) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return Math.max(0, months);
}

export function generateRange(min: number, max: number, step: number) {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

export interface MonetenEntry {
  wage: Wage;
  wagesForYear: WagesForYear;
  grossTotalPerMonth: number;
  grossTotalPerYear: number;
  performanceBonusTotalPerYear: number;
  trafoBonusGross: number;
  tZugABonusGross: number;
  tZugBBonusGross: number;
  holidayBonus: number;
  christmasBonus: number;
  christmasBonusPercentage: number;
}

export interface State {
  name: string
}

// needed for tax rates/church tax
export const STATES: State[] = [
  {
    name: "Baden-Württemberg"
  },
  {
    name: "Bayern"
  },
  {
    name: "Berlin"
  },
  {
    name: "Brandenburg"
  },
  {
    name: "Bremen"
  },
  {
    name: "Hamburg"
  },
  {
    name: "Hessen"
  },
  {
    name: "Mecklenburg-Vorpommern"
  },
  {
    name: "Niedersachsen"
  },
  {
    name: "Nordrhein-Westfalen"
  },
  {
    name: "Rheinland-Pfalz"
  },
  {
    name: "Saarland"
  },
  {
    name: "Sachsen"
  },
  {
    name: "Sachsen-Anhalt"
  },
  {
    name: "Thüringen"
  }
]

export const CHILD_ALLOWANCES: number[] = generateRange(0, 6, 0.5);

export interface PersonalData {
  children: boolean;
  childAllowance?: number;
  church: boolean;
  state: State;
}

export enum TaxGroup {
  I = "I",
  II = "II",
  III = "III",
  IV = "IV",
  V = "V",
  VI = "VI"
}

export interface WageDate {
  month: WageMonth;
  year: number;
}

export interface WageChange {
  date: WageDate;
  taxGroup: TaxGroup;
  wage: Wage;
  title?: string;
  description?: string;
}

export interface WageBonus {
  date: WageDate;
  value: number;
  title?: string;
  description?: string;
}

export interface WageEnd {
  date: WageDate;
  compensation?: WageBonus;
}

export interface Employer {
  name: string;
  start: WageChange;
  changes?: WageChange[];
  bonuses?: WageBonus[];
  end?: WageEnd;
  childAllowanceHere?: boolean;
}

export interface PersonalMoneten {
  data: PersonalData;
  employers: Employer[];
}
