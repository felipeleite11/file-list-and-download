const fs = require('fs')
const { promisify } = require('util')

const directoryPath = 'public/backups'

const read = promisify(fs.readdir)

async function load(req, res) {
	let files = await read(directoryPath)

	files.sort((a, b) => {
		if(a < b) return 1
        if(a > b) return -1
        return 0
	})

	return res.json(files)
}

module.exports = load

