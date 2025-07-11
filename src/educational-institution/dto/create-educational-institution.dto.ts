import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEducationalInstitutionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  countryId: number;
}
