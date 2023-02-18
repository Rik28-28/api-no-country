import bcrypt from 'bcrypt'

const encryp = async (data) => {
    const dataString = await data.toString()
    const salt = await bcrypt.genSalt(10)
    const encryptedData = await bcrypt.hash(dataString, salt)
    return encryptedData
}

export default encryp
