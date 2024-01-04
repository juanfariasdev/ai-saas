'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { BotAvatar } from '@/components/bot-avatar';
import { LoadingSpinner } from '@/components/loading-spinner';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { UserAvatar } from '@/components/user-avatar';
import { cn } from '@/lib/utils';
import { ChatCompletionMessageParam } from 'openai/resources';
import { useState } from 'react';
import { formSchema } from '../constants';

const ConversationAiPage = () => {

	const [messages, setMessage] = useState<ChatCompletionMessageParam[]>([]);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const userMessage: ChatCompletionMessageParam = {
				role: 'user',
				content: values.prompt,
			};

			const newMessages = [...messages, userMessage];

			const response = await axios.post('/api/conversation', {
				messages: newMessages,
			});

			setMessage((current) => [...current, userMessage, response.data]);

			form.reset();
		} catch (err) {
			// TODO: Open Pro Modal
			console.error(err);
		}
	};

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="
					rounded-lg
					border
					w-full
					p-4
					px-3
					md:px-3
					focus-within:shadow-sm
					grid
					grid-cols-12
					gap-2
					"
				>
					<FormField
						name="prompt"
						render={({ field }) => (
							<FormItem className="col-span-12 lg:col-span-10">
								<FormControl className="m-0 p-0">
									<Textarea
										className=" h-10 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
										disabled={isLoading}
										placeholder="If you could have a conversation with any vegetable, which one would it be and why?"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<Button className="col-span-12 lg:col-span-2 h-full" disabled={isLoading}>Generate</Button>
				</form>
			</Form>
			<div className='mt-4'>
				{messages.length > 0 && <h2 className="text-xl font-bold mt-2">AI Response</h2>}
				{isLoading && <div className='flex flex-col justify-center items-center bg-slate-100 rounded-xl p-8 animate-pulse'>
					<LoadingSpinner className='h-10 w-10 text-purple-500' />
					<p className='mt-2 text-lg text-gray-600'>AI is thinking...</p>
				</div>}
				{messages.length > 0 && (
					<>
						<div className="space-y-4 mt-4 text-sm">
							<div className="flex flex-col-reverse gap-y-4">
								{
									messages.map((message, key) => (
										<div
											key={key}
											className={cn(
												'px-6 py-8 w-full flex items-start gap-x-6 rounded-lg',
												message.role === 'user'
													? 'bg-white border border-black/10'
													: 'bg-muted',
											)}
										>
											{message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
											<div className='w-full'>
												<p className='font-bold'>
													{message.role}
												</p>
												<p>
													{String(message.content)}
												</p>
											</div>

										</div>
									))}
							</div>
						</div>

					</>
				)}
			</div>
		</div>
	);
};

export default ConversationAiPage;
