import { Giveway } from '../domain/giveway'
import { Participant } from '../domain/participant'
import { ParticipantRepository } from './port/participantrepository'

export class AddParticipantToGiveway {
  giveway: Giveway
  parcticipantRepo: ParticipantRepository

  constructor (giveway: Giveway, parcticipantRepo: ParticipantRepository) {
    this.giveway = giveway
    this.parcticipantRepo = parcticipantRepo
  }

  addParticipantToGiveway (): void {
    const plist: Participant[] = this.parcticipantRepo.findAllParticipants()

    plist.forEach(element => {
      this.giveway.addParticipant(element)
    })
  }
}
