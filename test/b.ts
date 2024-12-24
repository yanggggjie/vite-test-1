async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function test() {
  await sleep(1000)
  return '123'
}

async function t() {
  console.log(`hahah ${await test()}`)
}
t()
