import {
  useAuthRequest,
  exchangeCodeAsync,
  revokeAsync,
  ResponseType,
  makeRedirectUri,
  AccessTokenRequestConfig,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useContext, useEffect, useMemo } from "react";
import { Button, Alert } from "react-native";

import { AuthContext } from "../context/user/auth.context";

WebBrowser.maybeCompleteAuthSession();

const clientId = "hackers:claroqueuedeleteiesseservico";
const userPoolUrl = "https://hackers:claroqueuedeleteiesseservico.com";
const redirectUri = makeRedirectUri();

export default function AWSCognitoLogin() {
  const auth: any = useContext(AuthContext);

  const discoveryDocument = useMemo(
    () => ({
      authorizationEndpoint: userPoolUrl + "/oauth2/authorize",
      tokenEndpoint: userPoolUrl + "/oauth2/token",
      revocationEndpoint: userPoolUrl + "/oauth2/revoke",
      registrationEndpoint: userPoolUrl + "/signup",
    }),
    []
  );

  const [request, response, promptAsync] = useAuthRequest(
    {
      scopes: ["email", "openid", "aws.cognito.signin.user.admin"],
      clientId,
      responseType: ResponseType.Code,
      redirectUri,
      usePKCE: true,
    },
    discoveryDocument
  );

  useEffect(() => {
    const exchangeFn = async (exchangeTokenReq: AccessTokenRequestConfig) => {
      try {
        const exchangeTokenResponse = await exchangeCodeAsync(
          exchangeTokenReq,
          discoveryDocument
        );

        auth.logInUser(exchangeTokenResponse);
      } catch (error) {
        console.error(error);
      }
    };

    if (response) {
      if (response.type === "error") {
        Alert.alert(
          "Authentication error",
          response.params.error_description || "something went wrong"
        );
        return;
      }

      if (response.type === "success") {
        exchangeFn({
          clientId,
          code: response.params.code,
          redirectUri,
          extraParams: {
            code_verifier: request?.codeVerifier || "",
          },
        });
      }
    }
  }, [discoveryDocument, request, response]);

  const logout = async () => {
    const { refreshToken } = await auth.getUserTokens();

    const revokeResponse = await revokeAsync(
      {
        clientId,
        token: refreshToken,
      },
      discoveryDocument
    );

    if (revokeResponse) {
      auth.logOutUser();
    }
  };

  const registerAsync = async () => {
    await WebBrowser.openBrowserAsync(
      `${discoveryDocument.registrationEndpoint}?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}`
    );
  };

  return auth.isAuthenticated ? (
    <Button title="Logout" onPress={() => logout()} />
  ) : (
    <>
      <Button disabled={!request} title="Login" onPress={() => promptAsync()} />
      <Button title="Register" onPress={() => registerAsync()} />
    </>
  );
}
