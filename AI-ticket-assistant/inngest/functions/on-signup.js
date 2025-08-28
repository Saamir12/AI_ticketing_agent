import { inngest } from "../client.js";
import  User  from "../../models/user.models.js";
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer.js";

export const onUserSignup = inngest.createFunction(
  { id: "on-user-signup", retries: 2 },
  { event: "user/signup" },
  async ({ event, step }) => {
    try {
      const { email } = event.data;
      const user = await step.run("get-user-email", async () => {
        const userObject = await User.findOne({ email });
        if (!userObject) {
          throw new NonRetriableError("User does not exist in our database");
        }
        return userObject;
      });

      await step.run("send-welcome-email", async () => {
        const subject = `Welcome to our app!`
        const message= `Hi,
        \n\n
        Thank you for signing up! We're excited to have you on board.`
        await sendMail(user.email, subject, message);
      })
      return {success: true}
    } catch (error) {
      console.error("❌ Error in onUserSignup:", error.message)
      return {success: false}
    }
  }
);
