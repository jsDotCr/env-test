const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

console.log('stuff defined at build time', {
  branch: process.env.NOW_GITHUB_COMMIT_REF,
  SERVER_DEV: process.env.SERVER_DEV,
  SERVER_SECRET_DEV: process.env.SERVER_SECRET_DEV,
  SERVER_PROD: process.env.SERVER_PROD,
  SERVER_SECRET_PROD: process.env.SERVER_SECRET_PROD
})

const isProductionBranch = process.env.NOW_GITHUB_COMMIT_REF === 'master'

module.exports = (phase) => {
  console.log('current phase', phase)
  if (
    // npm run dev, next dev, now dev
    phase === PHASE_DEVELOPMENT_SERVER ||
    // branch !== master
    !isProductionBranch
  ) {
    console.log('sounds like it is a development deploy')
    return {
      /* development only config options here */
      env: {
        SERVER: process.env.SERVER_DEV,
        SERVER_SECRET: process.env.SERVER_SECRET_DEV
      }
    }
  }

  console.log('production deploy!')
  return {
    /* config options for all phases except development here */
    env: {
      SERVER: process.env.SERVER_PROD,
      SERVER_SECRET: process.env.SERVER_SECRET_PROD
    }
  }
}
