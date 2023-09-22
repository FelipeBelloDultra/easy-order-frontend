interface IClient {
  id: string;
  name: string;
  document: string;
}

export class Client {
  public id: string;
  public name: string;
  public document: string;

  private constructor(client: IClient) {
    this.id = client.id;
    this.name = client.name;
    this.document = client.document;
  }

  static create(client: IClient): Client {
    return new Client(client);
  }
}
