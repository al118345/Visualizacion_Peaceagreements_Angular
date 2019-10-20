export class Localizacion {
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
    public direccion: string,
    public documento: Upload,
    public introduccion: string,
    public localizacion: Localizacion,
    public nombre: string,
    public puja: number,
    public puja_minima: number,
    public usuarios_apostaron: [string],
    public activo: boolean,
    public mostrar: boolean,

    public video: Upload) {
  }

  to_json(): string {
    return JSON.stringify(this);
  }

}
export class Upload {
  name: string;
  url: string;
  createdAt: Date = new Date();

  constructor() {
  }
}
