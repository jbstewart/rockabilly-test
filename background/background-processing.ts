import { processWebhookEvents } from '~/webhooks.server'

async function main(): Promise<void> {
	setInterval(async () => {
		console.log('Background processing')
		await processWebhookEvents()
	}, 10000)
}

main()

export {}
