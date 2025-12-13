import { headers } from "next/headers";

export const getServerCookies = async () => {
  const cookies = (await headers()).get("cookie") || "";
  const token = cookies
    .split("; ")
    .find((c) => c.startsWith("accessToken="))
    ?.replace("accessToken=", "");
  return token;
};
