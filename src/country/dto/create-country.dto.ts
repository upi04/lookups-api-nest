import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @Length(2, 2)
  isoAlpha2: string;

  @IsString()
  @Length(3, 3)
  isoAlpha3: string;
}
