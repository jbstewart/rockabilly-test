import type { ChildProcess} from 'child_process';
import { fork } from 'child_process'

let childProcess: ChildProcess | null = null

export function startBackgroundProcessing() {
	if (childProcess) return // already running
	restartBackgroundProcessing()
}

export function restartBackgroundProcessing() {
	console.log('Starting background processor')
	childProcess = fork('build/background/background-processor.js', [], {
		env: {
			...process.env,
			TS_NODE_BASEURL: './build',
		},
		// execArgv: [
		// 	'--require tsconfig-paths/register'
		// ]
	})
	childProcess.on('close', (code: number) => {
		console.log(`Background processing function terminated with code ${code}`)
	})
}

