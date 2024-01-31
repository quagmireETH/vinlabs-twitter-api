import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // Use Twitter API v2
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // Log account details to see what is being received
        console.log("JWT Callback - Token:", token);
        console.log("JWT Callback - Account:", account);

        // If the user has just signed in
        if (account) {
          token.accessToken = account.access_token_key;
          token.id = account.userId;
          token.accessTokenSecret = account.access_token_secret;
        }

        // Log token details to see what is being stored
        console.log("Token:", token);
      } else {
        console.log("Token refresh or session access");
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
