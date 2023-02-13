import PetDTO, { CreatePetDTO, RacePetListDTO } from "../../domain/dto/PetDTO";
import { Pet } from "../../domain/entities/Pet";
import IPetRepository from "../../domain/repositories/Pet";
import { IHttp, IHttpRequestOption } from "../infrastructures/Http";

/**
 * Repository class
 *
 * @export
 * @class PetRepository
 * @implements {IPetRepository}
 */
export class PetRepository implements IPetRepository {
  /**
   * the serverURL
   *
   * @type {string}
   * @memberof PetRepository
   */
  readonly baseUrl: string = "";

  /**
   * http client
   *
   * @type {IHttp}
   * @memberof PetRepository
   */
  readonly http: IHttp;
  private defaultConfigs: Omit<IHttpRequestOption, "url"> = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  /**
   * Creates an instance of PetRepository.
   * @param {string} baseUrl server url
   * @param {IHttp} http http client
   * @memberof PetRepository
   */
  constructor(baseUrl: string, http: IHttp) {
    this.baseUrl = baseUrl + "/pets";
    this.http = http;
  }

  /**
   * create a pet
   *
   * @param {CreatePetDTO} pet pet data
   * @return {*}  {Promise<boolean>} returns true when the operation was succeded
   * @memberof PetRepository
   */
  async createPet(pet: CreatePetDTO): Promise<boolean> {
    const response = await this.http.request({
      ...this.defaultConfigs,
      url: this.baseUrl,
      method: "POST",
      body: pet,
    });

    return !!response;
  }

  /**
   * Return all the pets
   *
   * @return {*}  {Promise<Pet[]>}
   * @memberof PetRepository
   */
  async getAllPets(): Promise<Pet[]> {
    const response = await this.http.request({
      ...this.defaultConfigs,
      url: this.baseUrl,
    });

    return response.map((p: PetDTO) => new PetDTO(p));
  }

  /**
   *
   *
   * @return {*}  {Promise<Pet>}
   * @memberof PetRepository
   */
  async getPet(): Promise<Pet> {
    const response = await this.http.request({
      ...this.defaultConfigs,
      url: this.baseUrl,
    });

    return new PetDTO(response);
  }

  /**
   * Return all the pets race based on genre
   *
   * @return {*}  {Promise<Pet[]>}
   * @memberof PetRepository
   */
  async getAllPetRacesByGenre(genre?: string): Promise<RacePetListDTO[]> {
    const response = await this.http.request({
      ...this.defaultConfigs,
      url: this.baseUrl + "/races",
    });

    return response.map((p: RacePetListDTO) => ({
      label: p.label,
      value: p.value,
    }));
  }
}
