/* eslint-disable @typescript-eslint/no-var-requires */
import { Participant } from '../../domain/participant'
import { ParticipantRepository } from '../../use-case/port/participantrepository'

export class CsvParticipantRepository implements ParticipantRepository {
  lp: Participant[] = []

  constructor (filename: string) {
    const { load } = require('csv-load-sync')
    const csv = load(filename)

    csv.forEach(element => {
      this.lp.push(this.formatFromCsv(element.name, element.email))
    })
  }

  findAllParticipants (): Participant[] {
    return this.lp
  }

  formatFromCsv (name: string, email: string): Participant {
    const p: Participant = new Participant(CsvParticipantRepository.toTitleCase(name), email)
    return p
  }

  static toTitleCase (str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }
}
