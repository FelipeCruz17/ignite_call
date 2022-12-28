export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day)))) // para começar os dias da semana de maneira correta, como se domingo fosse o primeiro dia do mês
    .map((weekDay) => {
      return weekDay
        .substring(0, 1)
        .toLocaleUpperCase()
        .concat(weekDay.substring(1))
    }) // transformar a primeira letra do dia da semana em maiúscula
}
