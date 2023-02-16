export default class GenericError extends Error {
  public statusCode: number;

  constructor(
    message: string = "GenericError Message",
    statusCode: number = 500
  ) {
    super(message);
    this.name = "GenericError";
    this.message = message;
    this.statusCode = statusCode;
  }
}
