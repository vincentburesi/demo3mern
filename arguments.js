import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// Obtaining console line arguments
const argv = yargs(hideBin(process.argv)).argv
if (!argv.port)
  argv.port = 3000 // Setting default port to 3000

export default argv
