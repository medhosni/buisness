/*import AdminBroMongoose from '@admin-bro/mongoose'


import AdminBro from 'admin-bro'
import pkg from 'admin-bro-expressjs';
const {buildRouter} = pkg;
import mongoose  from 'mongoose';


AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || '123456789',
}
const router = buildRouter(adminBro)/*,{
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null
  
  }
})


export {adminBro,router}
*/