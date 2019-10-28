const { Fly } = require('./dist/index')

const fly = new Fly(process.env.FLY_KEY)

;(async () => {
  const apps = await fly.getApps()

  console.log(apps)
})()
