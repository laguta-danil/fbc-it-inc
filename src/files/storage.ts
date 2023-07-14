import { diskStorage } from 'multer'

const generateId = () =>
    Array(18).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('')


const normalizeFileName = (req, file, callback) => {
    const fileExName = file.originalname.split('.').pop();

    callback(null, `${generateId()}.${fileExName}`)
}

export const fileStorage = diskStorage({destination: './uploads', filename: normalizeFileName})