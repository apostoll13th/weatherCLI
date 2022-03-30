
const getArg = (args) => {
    const res = {}
    const el = args.slice(2)
    el.forEach ((value,index,arr) => {
      if (value.startsWith('-')) {
        if( index === arr.length - 1) {
          res[value.substring(1)] = true
        }
        else if(!arr[index+1].startsWith('-')){
          res[value.substring(1)] = arr[index + 1]
        }
        else {
          res[value.substring(1)] = true
        }
      }

    })
  return res;
}

export { getArg }