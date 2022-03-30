import {homedir} from 'os'
import {join} from 'path'
import { readFile, writeFile, stat } from 'fs/promises'

const fileName = join(homedir(), '.weatherCLI.json')

const TOKEN_DICT = {
  token: 'token',
  city: 'city',
  lat: 'lat',
  lon: 'lon'
}

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await ifExists(fileName)) {
    const read = await readFile(fileName)
    data = JSON.parse(read)
  }
  data[key] = value;
  await writeFile(fileName, JSON.stringify(data))
}

const ifExists = async (fileName) => {
  try {
    if (await stat(fileName)) {
      return true
    }
  }catch (e){
    return false
  }
}


const getKeyValue = async (key) => {
 let data = {}
  if(ifExists(fileName)){
   const read = await readFile(fileName)
    data = JSON.parse(read)
    return data[key]
 }

}

export {saveKeyValue, getKeyValue, TOKEN_DICT}
