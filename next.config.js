const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

console.log('stuff defined at build time', {
  SERVER_DEV: process.env.SERVER_DEV,
  SERVER_SECRET_DEV: process.env.SERVER_SECRET_DEV,
  SERVER_PROD: process.env.SERVER_PROD,
  SERVER_SECRET_PROD: process.env.SERVER_SECRET_PROD
})

module.exports = (phase) => {
  console.log('current phase', phase)
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        SERVER: process.env.SERVER_DEV,
        SERVER_SECRET: process.env.SERVER_SECRET_DEV
      }
    }
  }
  return {
    /* config options for all phases except development here */
    env: {
      SERVER: process.env.SERVER_PROD,
      SERVER_SECRET: process.env.SERVER_SECRET_PROD
    }
  }
}
