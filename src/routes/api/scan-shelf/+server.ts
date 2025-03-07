import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { base64 } = await request.json();

	console.log({ base64 });

	return json({ success: true });
};
