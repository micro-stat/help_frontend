import { Connection, Counter, HitCounter, WordWeb } from 'micro-stat'

export default function (context, inject) {
  Connection.connect('e5e1b2b2-5c01-4e79-b88c-5516709c0db5')

  const statistics = {
    Counter,
    HitCounter,
    WordWeb
  }

  const myCounter = new HitCounter('Help Center Loaded')
  myCounter.publish()

  inject('statistics', statistics)
}
