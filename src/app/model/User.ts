
export class User {
  constructor(
    public user: string,
    public passwd: string,
    public token: string
  ) {
  }

  to_json(): string {
    return JSON.stringify(this);
  }

}
