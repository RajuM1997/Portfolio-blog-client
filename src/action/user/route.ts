export const getAllUsers = async (token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (!res.ok) {
    console.error("Blog Data Fetching Failed", await res.text());
  }
  return await res.json();
};
