import { Connection, Counter, HitCounter, WordWeb } from 'micro-stat'

export default function (context, inject) {
  const options = {
    disablePublication: process.env.NODE_ENV === 'development'
  }

  Connection.connect('e5e1b2b2-5c01-4e79-b88c-5516709c0db5', options)

  const statistics = {
    Counter,
    HitCounter,
    WordWeb
  }

  const myCounter = new HitCounter('Help Center Loaded')
  myCounter.publish()

  inject('statistics', statistics)
}
