export class StatusDTO {
  readonly status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
}

export class TaskDTO {
  id: string;
  title: string;
  description: string;
  status: StatusDTO;
  expirationDate: Date;
}
