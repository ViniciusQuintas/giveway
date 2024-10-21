/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import { CsvParticipantRepository } from './adapter/repository/csvparticipantrepository'
import { AddParticipantToGiveway } from './use-case/addparticipanttogiveaway'
import { CreateGiveway } from './use-case/creategiveaway'
import { DrawWinnersFromGiveaway } from './use-case/drawwinners'
import * as fs from 'fs'

export class Main {
  static run (): void {
    const giveway = new CreateGiveway().createGiveway()
    const csvRepo = new CsvParticipantRepository('participants.csv')
    const addParticipant = new AddParticipantToGiveway(giveway, csvRepo)
    addParticipant.addParticipantToGiveway()
    const drawWinners = new DrawWinnersFromGiveaway(giveway)
    const winners = drawWinners.drawWinners(1)

    let winnersFile = ''

    winners.forEach(element => {
      winnersFile += `${element.name} - ${element.email} \n`
    })

    fs.writeFile('winners.txt', winnersFile, (err: Error) => {
      if (err != null) throw err
    })
  }
}

Main.run()
