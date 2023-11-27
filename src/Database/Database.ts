import mongoose from "mongoose"


class DatabaseConfig {
  static initialize() {
    try {
      mongoose.connection.on("open", () => {
        console.log('Successful connection.')
      })
      mongoose.connect(process.env.DATABASE_URL as string)
    } catch (error: any) {
      console.log(error)
   }
  }
}

export { DatabaseConfig }

