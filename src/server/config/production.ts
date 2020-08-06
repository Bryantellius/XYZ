import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Can't find .env!");
}

export default {
  port: parseInt(process.env.PORT, 10),
  stripe: {
    stripe_pk: process.env.PUBLISHABLE_KEY,
    stripe_sk: process.env.SECRET_KEY,
  },
};
