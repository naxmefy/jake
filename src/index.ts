import * as rc from 'rc'

export interface IJakeOptions {

}

const defaultConfig: IJakeOptions = {

}

export function cli (cwd?: String, options?: IJakeOptions) {
  if (!cwd) {
    cwd = process.cwd()
  }

  const config: IJakeOptions = rc('jake', defaultConfig)
  Object.assign(config, options)

  console.log(cwd, options, config)

}
