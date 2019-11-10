const magica = require('magica').main
const fs = require('fs')

async function convertImage () {
	const result = await magica({
		debug: true,
		command: 'convert javascript.jpg -scale 50% javascript.png',
		inputFiles: ['./javascript.jpg']
	})
	result.outputFiles.forEach(f => fs.writeFileSync(f.name, f.content))
}

convertImage()