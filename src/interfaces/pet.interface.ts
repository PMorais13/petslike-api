import { TypePetsEnum } from 'src/enum/type-pets.enum';

export interface PetInterface {
  name: string;
  type: TypePetsEnum;
  dateBirth: string;
  owner: string;
}
