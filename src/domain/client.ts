type ClientProps = {
  id: string;
  name: string;
  document: string;
};

export class Client {
  public readonly id: string;
  public readonly name: string;
  public readonly document: string;

  private constructor(client: ClientProps) {
    this.id = client.id;
    this.name = client.name;
    this.document = client.document;
  }

  public static create(client: ClientProps): Client {
    return new Client(client);
  }
}
