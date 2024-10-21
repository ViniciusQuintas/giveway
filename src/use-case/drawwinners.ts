import { Giveway } from '../domain/giveway'
import { Participant } from '../domain/participant'

export class DrawWinnersFromGiveaway {
  giveway: Giveway

  constructor (giveway: Giveway) {
    this.giveway = giveway
  }

  drawWinners (num: number): Participant[] {
    const winners: Participant[] = []

    for (let i = 0; i < num; i++) {
      winners.push(this.giveway.draw())
    }

    return winners
  }
}
