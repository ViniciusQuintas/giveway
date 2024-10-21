import { Giveway } from '../domain/giveway'

export class CreateGiveway {
  createGiveway (): Giveway {
    return new Giveway()
  }
}
