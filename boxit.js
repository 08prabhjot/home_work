let arrayOfNames = process.argv.splice(2)

function drawLine (num) {
  let line = ''
  for (let i = 0; i < num; i++) {
    line += '\u2501'
  }
  return line
}

function drawTopBorder (num) {
  return `\u250F${drawLine(num)}\u2513`
}

function drawMiddleBorder (num) {
  return `\u2523${drawLine(num)}\u252B`
}

function drawBottomBorder (num) {
  return `\u2517${drawLine(num)}\u251B`
}

function drawBarsAround (arg) {
  return `\u2503${arg}\u2503`
}

function boxIt (args) {
  let num = Math.max(...(args.map(arg => arg.length)))
  let result = ''
  if (args.length < 2) {
    result += `${drawTopBorder(num)}\n${args.length ? drawBarsAround(args[0]) : ''}\n${drawBottomBorder(num)}`
  } else {
    result += `${drawTopBorder(num)}\n`
    for (let i = 0; i < args.length - 1; i++) {
      result += `${drawBarsAround(args[i])}\n${drawMiddleBorder(num)}\n`
    }
    result += `${drawBarsAround(args[args.length-1])}\n${drawBottomBorder(num)}`
  }
  return result
}

console.log(boxIt(arrayOfNames))
