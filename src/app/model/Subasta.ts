class Localizacion {
  constructor(
    public Latitud: number,
  public Longitud: number) {
  }
}

export class Subasta {
  constructor(
    public id: string,
    public FechaLimite: Date,

    public GestionPropia: boolean,
    public categoria: string,
    public cif: string,
    public descripcion: string,
    public dirección: string,
    public documento: string,
    public introduccion: string,
    public localizacion: Localizacion,
    public nombre: string,
    public puja: number,
    public puja_minima: number,
    public usuarios_apostaron: [string],
    public video: string) {
  }

  to_json(): string {
    return JSON.stringify(this);
  }

}
