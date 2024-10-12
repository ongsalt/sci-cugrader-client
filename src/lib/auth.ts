// There is no real auth here

export function loginWithCookie(cookie: string, accessToken: string) {
  for (const part of cookie.split(";")) {
    document.cookie = part;
  }
  document.cookie = `access_token_cookie=${accessToken}`;
  // TODO: verify cookie correctness
  console.log("Done")
}

export function hasAuthToken() {
  return document.cookie !== ""
}