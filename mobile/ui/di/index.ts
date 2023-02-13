import infrastructures from "./infrastructures";
import presenters from "./presenters";
import repositories from "./repositories";
import applicationUseCases from "./usecases";

const infra = infrastructures();
const repo = repositories(infra);
const useCases = applicationUseCases(repo);
const presenter = presenters(useCases);

export default {
  pet: presenter.pet,
};
