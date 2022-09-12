const BASE_URL = "http://localhost:3001/api/curiosities/";

export async function create(userId, curiosity) {
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ question: curiosity, userId: userId }),
  }).then((res) => res.json());
}
