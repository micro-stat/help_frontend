import { Connection, Counter, HitCounter } from 'micro-stat'

export default function (context, inject) {
  Connection.connect('https://micro-stat-functions.azurewebsites.net/api/ingest?dsn=e5e1b2b2-5c01-4e79-b88c-5516709c0db5')

  const statistics = {
    Counter,
    HitCounter
  }

  const myCounter = new HitCounter('Help Center Loaded')
  myCounter.publish()

  inject('statistics', statistics)
}
