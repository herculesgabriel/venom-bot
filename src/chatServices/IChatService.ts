export interface IChatService {
  createInstance(session: string): Promise<void>;
  startInstance(session: string): Promise<void>;
  getAuthCode(session: string): Promise<string>;
  sendMessage(from: string, to: string, messages: string[]): Promise<void>;
}
// session -> id
