interface IJakeOptions {

}

export default function jake(cwd?: String, options?:IJakeOptions) {
  console.log(cwd, options)
}
