import { Participant } from './participant'

export class Giveway {
  participants: Participant[] = []

  addParticipant (p: Participant): void {
    this.participants.push(p)
  }

  draw (): Participant {
    const n = Math.floor(this.participants.length * Math.random())
    const p = this.participants[n]
    this.participants.splice(n, 1)

    return p
  }
}
