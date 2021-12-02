import {expect, test} from '@oclif/test'
import * as crypto from 'crypto'

const str = crypto.randomBytes(2).toString('hex')

describe('deploy', () => {
  test
  .stderr()
  .command(['deploy', `test-${str}`, '--dir', 'test/dist'])
  .it('runs deploy cmd', ctx => {
    let regex = new RegExp(`Site not found: test-${str}-.*`)
    expect(ctx.stderr).to.match(regex)
    regex = new RegExp(`Site created: http://test-${str}-.*.netlify.app`)
    expect(ctx.stderr).to.match(regex)
    regex = new RegExp(`Deployed: http://test-${str}-.*.netlify.app`)
    expect(ctx.stderr).to.match(regex)
  })
})

describe('delete', () => {
  test
  .stderr()
  .command(['delete', `test-${str}`])
  .it('runs delete cmd', ctx => {
    expect(ctx.stderr).to.match(new RegExp(`Site deleted: http://test-${str}-.*.netlify.app`))
  })
})
