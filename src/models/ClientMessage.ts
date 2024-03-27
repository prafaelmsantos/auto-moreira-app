export interface IClientMessage {
  id: number | null;
  name: string;
  email: string;
  phoneNumber: number;
  message: string;
  dateTime: Date | null;
}
