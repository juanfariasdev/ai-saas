import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
	apiKey,
});
const instructionsMessage: ChatCompletionMessageParam = {
	role: 'system',
	content:
		'You are a code creator. Your communication is done through codes. Use comments to explain. Always respond in a simple way and follow good coding practices.',
};
export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const body = await req.json();

		const { messages } = body;

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		if (!apiKey) {
			return new NextResponse('OpenAI API Key not configured', {
				status: 500,
			});
		}

		if (!messages) {
			return new NextResponse('Messages are required', { status: 400 });
		}
		const response = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo-1106',
			messages: [instructionsMessage, ...messages],
		});
		return NextResponse.json(response.choices[0].message);
	} catch (err) {
		console.log('[CONVERSATION ERROR]', err);
		return new NextResponse('[Internal Error]', { status: 500 });
	}
}
