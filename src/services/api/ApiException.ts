// Classe que retorna erro quando não encontra os dados no json.

export class ApiException extends Error {
  public readonly message: string = '';

  constructor(message: string) {
    super();

    this.message = message;
  }
}
