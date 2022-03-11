import {Component, OnInit} from '@angular/core';
import {
  buildWagesForYearByWage,
  calculateWageGrossForMonth,
  calculateWageGrossForYear,
  CHILD_ALLOWANCES,
  DEFAULT_PERFORMANCE_BONUS_PERCENTAGE,
  Employer,
  ERA_BASIC_RENUMERATION,
  generateRange,
  getDateForFirstOfMonth,
  MonetenEntry,
  PAY_GROUPS,
  PayGroup,
  PERFORMANCE_BONUS_MAX_PERCENTAGE,
  PERFORMANCE_BONUS_MIN_PERCENTAGE,
  PERFORMANCE_BONUS_PERCENTAGE_STEP,
  PersonalMoneten,
  State,
  STATES,
  TaxGroup,
  Wage,
  WageMonth,
  WEEKLY_HOURS
} from "./@core/moneten.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'sst-moneten-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Moneten!';

  readonly states: State[] = STATES;

  readonly childAllowances: number[] = CHILD_ALLOWANCES;

  readonly taxGroups: string[] = Object.keys(TaxGroup);

  readonly payGroups: PayGroup[] = PAY_GROUPS;

  readonly displayedColumns: string[] = [
    "EG",
    "HoursPerWeek",
    "PerformanceBonusPercentage",
    "GrossTotalMonth",
    "GrossTotal",
    "PerformanceBonus",
    "Trafo",
    "TZUG",
    "HolidayBonus",
    "ChristmasBonus"
  ];

  readonly datasource: MatTableDataSource<MonetenEntry> = new MatTableDataSource<MonetenEntry>()

  readonly currentYear: number;

  personalMoneten: PersonalMoneten = {
    data: {
      children: false,
      church: false,
      state: STATES[0]
    },
    employers: []
  }

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    const monetenEntries: MonetenEntry[] = [];
    const entryDate = new Date(2022, 3, 1);
    const performanceBonusPercentages = generateRange(
      PERFORMANCE_BONUS_MIN_PERCENTAGE,
      PERFORMANCE_BONUS_MAX_PERCENTAGE,
      PERFORMANCE_BONUS_PERCENTAGE_STEP
    )
    PAY_GROUPS.forEach(payGroup => {
      performanceBonusPercentages.forEach(performanceBonusPercentage => {
        WEEKLY_HOURS.forEach(weeklyHours => {
          const wage: Wage = {
            entryDate: entryDate,
            performanceBonusPercentage: performanceBonusPercentage,
            payGroup: payGroup,
            hoursPerWeek: weeklyHours
          };
          const wagesForYear = buildWagesForYearByWage(2022, wage)
          const wagesForJanuary = wagesForYear.wagesPerMonth.JANUARY;
          const grossTotalJanuary = calculateWageGrossForMonth(wagesForJanuary!, WageMonth.JANUARY, 2022);
          const grossTotal = calculateWageGrossForYear(wagesForYear)
          monetenEntries.push({
            wage: wage,
            wagesForYear: wagesForYear,
            grossTotalPerMonth: grossTotalJanuary.total,
            grossTotalPerYear: grossTotal.total,
            performanceBonusTotalPerYear: grossTotal.performanceBonus,
            trafoBonusGross: grossTotal.trafoBonus,
            tZugABonusGross: grossTotal.tZugABonus,
            tZugBBonusGross: grossTotal.tZugBBonus,
            christmasBonusPercentage: grossTotal.christmasBonusPercentage,
            christmasBonus: grossTotal.christmasBonus,
            holidayBonus: grossTotal.holidayBonus
          })
        });
      });
    });
    this.datasource.data = monetenEntries;
  }

  onAddEmployer(employers: Employer[], year: number) {
    employers.push({
      name: "Neuer Arbeitgeber",
      start: {
        date: {
          month: WageMonth.JANUARY,
          year: year
        },
        taxGroup: TaxGroup.I,
        wage: {
          entryDate: getDateForFirstOfMonth(year, WageMonth.JANUARY),
          payGroup: ERA_BASIC_RENUMERATION,
          hoursPerWeek: ERA_BASIC_RENUMERATION.hoursPerWeek,
          performanceBonusPercentage: DEFAULT_PERFORMANCE_BONUS_PERCENTAGE
        }
      }
    });
  }

}
