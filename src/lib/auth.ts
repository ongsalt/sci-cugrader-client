// There is no real auth here

import { goto } from "$app/navigation";

export function loginWithCookie(cookie: string, accessToken: string) {
  for (const part of cookie.split(";")) {
    document.cookie = part;
  }
  document.cookie = `access_token_cookie=${accessToken}`;
  // TODO: verify cookie correctness
  console.log("Done")
}

export function logout() {
  document.cookie = ""
  goto("/")
}

export function hasAuthToken() {
  return document.cookie !== ""
}