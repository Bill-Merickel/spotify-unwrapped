# Spotify Unwrapped App

This is a web app built using Node.js and React with the Spotify API that allows the user to view various data about their spotify account, such as number of followers, top tracks, and playlists. The web app also allows the user to sort tracks in their playlist sorted by different metrics, such as danceability and tempo. To visit the app, click on [this link](https://spotify-unwrapped.onrender.com).

**NOTE:** Due to Spotify API changes, the app is currently limited to 25 users that must be added into the Spotify Developer Portal. If you are interested in trying the app, email me your name and email address linked to your Spotify account.

<img width="1486" alt="Screenshot 2023-07-11 at 11 52 35 AM" src="https://github.com/Bill-Merickel/spotify-unwrapped/assets/20192754/a77b9c08-c77c-4111-a6aa-b05611962032">
<img width="1478" alt="Screenshot 2023-07-11 at 11 53 04 AM" src="https://github.com/Bill-Merickel/spotify-unwrapped/assets/20192754/25168ffb-5b1e-4192-9fa2-a7a825595128">


## Local Installation & Set Up

1. Register a Spotify App in your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as a Redirect URI in the app settings

2. Create a `.env` file at the root of the project based on `.env.example` and add your unique `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard

3. Ensure [nvm](https://github.com/nvm-sh/nvm) and [npm](https://www.npmjs.com/) are installed globally

4. Install the correct version of Node

    ```shell
    nvm install
    ```

5. Install dependencies

    ```shell
    npm install
    ```

6. Run the React app on <http://localhost:3000> and the Node server on <http://localhost:8888>

    ```shell
    npm start
    ```

## Deploying to Render with GitHub

1. Create a [Render](https://render.com/) app

2. Click on the **New Web Service** button under the **Web Services** option, then click on the **Connect Account** button under the GitHub menu.

3. Click on the **Configure** link and you can give permission to select the repository with the app, then click on the green **Install** button to give repository access to Render.

4. Click on the **Connect** button and you will be brought to a screen where you are required to provide various inputs for your app deployment. Put in a meaningful name in the **Name** field and complete the other fields. For the **Build Command**, put

   ```shell
   npm install; npm run build
   ```

    and for the **Start Command**, put

    ```shell
   npm run start
   ```

5. Select the free plan in the **Plans** section and then scroll down further and click the **Advanced** button. Here, you can upload your **.env** file or enter your secrets manually.

   Based on the values in your `.env` file, the `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, and `FRONTEND_URI` key value pairs. Make sure to replace the `localhost` URLs with your Render app's URL.

   ```env
   REDIRECT_URI: http://your-app-name.onrender.com/callback
   FRONTEND_URI: http://your-app-name.onrender.com
   ```

6. Click on the **Create Web Service** field and the deployment process will start. Wait for a while until the deployment is finished. Once your app deployment is finished and your app is live, you can click on the deployed application URL displayed at the top of the page to view your app.
