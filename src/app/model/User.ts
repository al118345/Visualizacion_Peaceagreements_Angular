
export class User {
  constructor(
    public id: string,
    public direccionfacturacion: string,
    public nif: string,
    public razonsocial: string,
    public telefono: string,
    public email: string,
    public rol: string,
  ) {
  }

  to_json(): string {
    return JSON.stringify(this);
  }

}
