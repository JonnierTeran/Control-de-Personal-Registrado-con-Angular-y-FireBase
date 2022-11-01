export class PersonaModel {
  //Atributos del modelo

  private Nombre: string;
  private Apellido: string;

  //Inicializacion de atributos
  constructor(Nombre: string, Apellido: string) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
  }

  //metodos Accesores y Modificadores Set y Get
  //set
  public setNombre(nombre: string): void {
    this.Nombre = nombre;
  }

  //Set
  public setApellido(Apellido: string): void {
    this.Apellido = Apellido;
  }

  //Get
  public getNombre(): string {
    return this.Nombre;
  }

  //get
  public getApellido(): string {
    return this.Apellido;
  }
}
