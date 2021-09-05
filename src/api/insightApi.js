import { BASE_URL } from "./const";

async function getProjectInsight(id) {
	const url = `${BASE_URL}/video/${id}/insight`;
	const options = { method: "GET" };

	return await fetch(url, options).then((response) => response.json());
}

export { getProjectInsight };
