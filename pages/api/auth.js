// import { TwitterApi } from "twitter-api-v2";
// import { serialize } from "cookie";
// require('dotenv').config();

// export default function handler(req, res) {
//   const client = new TwitterApi({
//     clientId: process.env.TWITTER_CLIENT_ID,
//     clientSecret: process.env.TWITTER_CLIENT_SECRET,
//     callbackURL: process.env.TWITTER_CALLBACK_URL,
//   });

//   // Redirect user to Twitter auth page
//   const { url, codeVerifier, state } = client.generateOAuth2AuthLink();

//   // Set cookies for state and codeVerifier
//   res.setHeader("Set-Cookie", [
//     serialize("state", state, { path: "/", httpOnly: true }),
//     serialize("code_verifier", codeVerifier, { path: "/", httpOnly: true }),
//   ]);

//   res.redirect(url);
// }
import { TwitterApi } from 'twitter-api-v2';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  // Initialize the Twitter client
  const client = new TwitterApi({
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
  });

  // Retrieve the URL and state for the authentication flow
  const { url, state, codeVerifier } = client.generateOAuth2AuthLink(
    process.env.TWITTER_CALLBACK_URL,
    { scope: ['tweet.read', 'users.read', 'offline.access'] }
  );

  // Set cookies for state and codeVerifier
  res.setHeader('Set-Cookie', [
    serialize('state', state, { path: '/', httpOnly: true }),
    serialize('code_verifier', codeVerifier, { path: '/', httpOnly: true }),
  ]);

  // Redirect the user to the Twitter authentication page
  res.redirect(url);

  console.log("Auth URL:", url);
  console.log("State:", state);
  console.log("Code Verifier:", codeVerifier);
}

