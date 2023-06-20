import { DateTime } from 'luxon';

const now = DateTime.now();
export const stockprices = {
  weeklyExpenses    : {
    amount: 17663,
    labels: [
      now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
      now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
      now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
      now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
      now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
      now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM')
    ],
    series: [
      {
        name: 'Expenses',
        data: [4412, 4345, 4541, 4677, 4322, 4123]
      }
    ]
  },
}
