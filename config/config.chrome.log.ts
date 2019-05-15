import { config } from "./config"
import * as path from "path"

config.chromeDriver = path.resolve('config/protractor-chromedriver.sh')

export { config }