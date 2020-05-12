export const fetchUsers = (quantity, interval) => {
  return fetch(
    `https://api.leeloo.ai/api/v1/accounts?limit=${quantity}&offset=${interval}`,
    {
      method: "GET",
      headers: {
        "X-Leeloo-AuthToken":
          "cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb",
      },
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch users!");
  });
};

export const fetchUserDetails = (id) => {
  return fetch(`https://api.leeloo.ai/api/v1/accounts/${id}?include=orders`, {
    method: "GET",
    headers: {
      "X-Leeloo-AuthToken":
        "cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch user's details !");
  });
};
