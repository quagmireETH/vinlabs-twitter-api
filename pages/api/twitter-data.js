import Twitter from "twitter-lite";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log("Session:", session);

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const client = new Twitter({
    version: "2",
    extension: false,
    subdomain: "api",
    consumer_key: process.env.TWITTER_CLIENT_ID,
    consumer_secret: process.env.TWITTER_CLIENT_SECRET,
    access_token_key: token.accessToken,
  });

  console.log("Twitter Data - Session:", session);
  console.log("Twitter Data - Token:", token);
  console.log("Twitter Data - Client:", client);

  const searchQuery = "#VIN from:" + session.user.name;
  console.log("Search query:", searchQuery);

  try {
    const tweets = await client.get("tweets/search/recent", {
      q: searchQuery,
    });
    console.log("Tweets:", tweets);

    let replyCount = 0, quoteCount = 0, mentionCount = 0;

    if (tweets && tweets.data) {
      tweets.data.forEach((tweet) => {
        if (tweet.text.startsWith("@")) {
          replyCount++;
        }
        if (
          tweet.referenced_tweets &&
          tweet.referenced_tweets.some((ref) => ref.type === "quoted")
        ) {
          quoteCount++;
        }
        if (tweet.text.includes("#VIN")) {
          mentionCount++;
        }
      });
    }

    const twitterData = {
      totalTweets: tweets.data ? tweets.data.length : 0,
      replyCount,
      quoteCount,
      mentionCount,
    };

    console.log("Twitter Data - Search Query:", searchQuery);
    console.log("Tweets:", tweets);

    res.status(200).json(twitterData);
  } catch (error) {
    console.error("Error fetching data from Twitter:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}