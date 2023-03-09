import { type NextApiResponse, type NextApiRequest } from "next";
import { env } from "~/env.mjs";

export interface subscribeUserRequest extends NextApiRequest {
  body: {
    email: string;
  };
}

const subscribe = async (req: subscribeUserRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  const AUDIENCE_ID = env.MAILCHIMP_AUDIENCE_ID;
  const API_KEY = env.MAILCHIMP_API_KEY;
  const DATACENTER = env.MAILCHIMP_API_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
  const data = {
    email_address: email,
    status: "pending",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });
    if (response.status >= 400) {
      return res.status(400).json({
        error:
          "There was an error subscribing to the newsletter. Shoot me an email at domenic.walther@gmx.de and I will add you manually.",
      });
    }
    return res.status(201).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ error: "An error occured." });
  }
};

export default subscribe;
