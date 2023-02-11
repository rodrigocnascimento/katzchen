import Http from "~/application/adapter/infrastructures/Http";

export interface IInfrastructures {
  http: Http;
}

export default (): IInfrastructures => {
  return {
    http: new Http(),
  };
};
