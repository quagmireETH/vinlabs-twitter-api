// import { getSession, setSession } from "next-auth/react";
// import { parse } from "cookie";
// import { TwitterApi } from "twitter-api-v2";

// export default async function handler(req, res) {
//   const { state, code } = req.query;
//   const cookies = parse(req.headers.cookie || "");
//   // Check if the state matches the state in the cookies
//   if (state !== cookies.state) {
//     return res.status(403).send("State mismatch");
//   }

//   const client = new TwitterApi({
//     clientId: process.env.TWITTER_CLIENT_ID,
//     clientSecret: process.env.TWITTER_CLIENT_SECRET,
//   });

//   try {
//     // Obtain the tokens using the code and codeVerifier
//     const { accessToken, refreshToken } = await client.loginWithOAuth2({
//       code,
//       codeVerifier: cookies.code_verifier,
//       redirectUri: process.env.TWITTER_CALLBACK_URL,
//     });

//     console.log(accessToken, " and ", refreshToken);

//     const session = await getSession({ req });

//     console.log("Session is " + session);

//     // TODO: Check this snippet
//     if (session) {
//       // Update the session with new tokens
//       session.accessToken = accessToken;
//       session.refreshToken = refreshToken;
//       await setSession({ req }, session);
//     } else {
//       return res.status(501).send("Access/Refresh not obtained.");
//     }

//     // Redirect to your application's dashboard
//     res.redirect("/Dashboard/Dashboard");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Authentication failed");
//   }
// }
//
import { TwitterApi } from "twitter-api-v2";
import { getSession } from "next-auth/react";
import { parse } from "cookie";

export default async function handler(req, res) {
  const { state, code } = req.query;
  const cookies = parse(req.headers.cookie || "");

  if (state !== cookies.state) {
    return res.status(403).send("State mismatch");
  }

  console.log("Callback - Query State:", state);
  console.log("Callback - Cookie State:", cookies.state);
  console.log("Callback - Session:", session);

  const session = await getSession({ req });

  if (session) {
    const client = new TwitterApi({
      bearerToken: session.accessToken,
    });

    try {
      // Perform additional actions with the Twitter API client
      const userDetails = await client.v2.me();
      // Handle additional logic with userDetails
      console.log(userDetails);

      res.redirect("/Dashboard/Dashboard");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error processing additional logic");
    }
  } else {
    return res.status(401).send("No session found");
  }
}
