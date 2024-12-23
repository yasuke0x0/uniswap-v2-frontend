try {
  const nodeVersion = process.version
  const expectedVersion = 'v16'

  if (!nodeVersion.startsWith(expectedVersion)) {
    throw new Error(
      `Expected Node.js version ${expectedVersion}, but found ${nodeVersion}. Try using a tool like nvm to switch between versions.`
    )
  }
  console.log(`✔ Node.js version is ${nodeVersion}`)
} catch (error) {
  console.error(`❌ Error: ${error.message}`)
  process.exit(1)
}
