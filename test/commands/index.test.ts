import {expect, test} from '@oclif/test'
import * as crypto from 'crypto'
import Site from '../../src/site'

const str = crypto.randomBytes(2).toString('hex')
const name = `test-${str}`

describe('commands', () => {
  after(async function () {
    // if 'delete' fails try deleting again here
    return new Site(name, (msg, ...args) => {
      console.log(`(after hook) ${msg}`, ...args)
    }).delete()
  })
  describe('deploy', () => {
    test
    .stderr({print: true})
    .command(['deploy', name, '--dir', 'test/dist'])
    .it('runs deploy cmd', (ctx, done) => {
      let regex = new RegExp(`Site not found: test-${str}-.*`)
      expect(ctx.stderr).to.match(regex)
      regex = new RegExp(`Site created: http://test-${str}-.*.netlify.app`)
      expect(ctx.stderr).to.match(regex)
      regex = new RegExp(`Deployed: http://test-${str}-.*.netlify.app`)
      expect(ctx.stderr).to.match(regex)
      done()
    })
  })

  describe('delete', () => {
    test
    .stderr({print: true})
    .command(['delete', name])
    .it('runs delete cmd', (ctx, done) => {
      expect(ctx.stderr).to.match(new RegExp(`Site deleted: http://test-${str}-.*.netlify.app`))
      done()
    })
  })
})
