export class Beep {
  Id: number;
  Name: string;
  DateOfBirth: Date;
  Gender: string;
  EyesCount: number;
  Description: string;
}

export class BeepViewModel extends Beep {
  Expanded: boolean;
}