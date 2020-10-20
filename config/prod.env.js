'use strict'

module.exports = {
  NODE_ENV: '"production"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY}"`
}