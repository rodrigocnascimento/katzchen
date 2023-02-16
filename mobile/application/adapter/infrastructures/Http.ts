/**
 * Http Cliente Params
 *
 * @export
 * @interface IHttpRequestOption
 */
export interface IHttpRequestOption {
  readonly method: string;
  readonly url: string;
  readonly headers?: any;
  readonly body?: any;
}

/**
 *
 * Http client interface
 * @export
 * @interface IHttp
 */
export interface IHttp {
  request(requestOption: IHttpRequestOption): Promise<any>;
}

/**
 *
 * Don't have much to say, but it's a basic class that implements
 * the fetch Nodejs builtin  lib
 * @class Http
 * @implements {IHttp}
 */
class Http implements IHttp {
  /**
   * Trigger the request to the server
   *
   * @param {IHttpRequestOption} requestOption http client request options
   * @return {*}  {Promise<any>}
   * @memberof Http
   */
  async request(requestOption: IHttpRequestOption): Promise<any> {
    const option: RequestInit = { method: requestOption.method };

    if (requestOption?.headers)
      option.headers = new Headers(requestOption.headers);

    if (requestOption?.body) option.body = JSON.stringify(requestOption.body);

    const res = await fetch(requestOption.url, option);

    return await res.json();
  }
}

export default Http;
