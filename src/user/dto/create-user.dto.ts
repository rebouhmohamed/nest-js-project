import { IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly nationality: string;

  @IsString({ each: true })
  readonly job: string[];
}
