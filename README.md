# m-SteamAPI
## This package allows you to access Steam web api data easily.

### Initialization example:
```js
const steamAPI = require('@__mdev/m-steamapi');
const api = new steamAPI("YOUR_STEAM_API_KEY");
await api.getPlayerCount(APPID);
```

**To get your API key go here:** https://steamcommunity.com/dev/apikey

### Functions:
    > getPlayerCount(appID)
        - Get back player count from specified Steam app ID.
    > getPlayerSummaries(steamID)
        - Get back player data from specified SteamID64.
    > getUserGroups(steamID)
        - Get back user groups list from specified SteamID64.
    > resolveVanityUrl(vanityURL)
        - Get back user SteamID64 from VanityURL.
    > getUserBans(steamID)
        - Get user ban stats from SteamID64.
    > getGameAchievements(appID)
        - Get list of achievements from specified appID.
    > getUserStatsForGame(steamID, appID)
        - Get user achievements from specified appID.
    > getSteamGames()
        - Returns Steam games from store.
    > getSteamSoftware()
        - Returns Steam software from store.
    > getUserBadges(steamID)
        - Returns user owned Steam badges.
    > getUserCommunityBadgeProgress(steamID)
        - Returns user Community Badge progress.
    > getUserDisplayedBadge(steamID)
        - Returns user's displayed badge details.
    > getUserGames(steamID)
        - Returns list of user's owned games.
    > getUserCustomizationDetails(steamID)
        - Returns user's profile customization details.
    > getUserProfileItemsEquipped(steamID)
        - Returns user's profile items equipped.
    > getUserRecentlyPlayedGames(steamID)
        - Returns user's recently played games count and list.
    > getUserLevel(steamID)
        - Returns user's Steam level.
    > getLevelDistribution(level)
        - Returns data about Steam level distribution.
    > getAppNews(appID)
        - Returns news of providen appID.
    > getInventory(appID, steamID)
        - Returns Array with user inventory items.
