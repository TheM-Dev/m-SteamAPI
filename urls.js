module.exports = {
    getPlayerCount: (apiKey, appID) => {
        return `http://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1?key=${apiKey}&appid=${appID}`;
    },
    getPlayerSummaries: (apiKey, steamID) => {
        return `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamID}`;
    },
    getUserGroups: (apiKey, steamID) => {
        return `https://api.steampowered.com/ISteamUser/GetUserGroupList/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    resolveVanityUrl: (apiKey, vanityURL) => {
        return `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${vanityURL}`;
    },
    getUserBans: (apiKey, steamID) => {
        return `https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${apiKey}&steamids=${steamID}`;
    },
    getGameAchievements: (apiKey, appID) => {
        return `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=${appID}`;
    },
    getUserStatsForGame: (apiKey, steamID, appID) => {
        return `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${apiKey}&steamid=${steamID}&appid=${appID}`;
    },
    getSteamGames: (apiKey) => {
        return `https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${apiKey}&include_games=true&include_dlc=false&include_software=false&include_videos=false&include_hardware=false&max_results=50000`;
    },
    getSteamSoftware: (apiKey) => {
        return `https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${apiKey}&include_games=false&include_dlc=false&include_software=true&include_videos=false&include_hardware=false&max_results=50000`;
    },
    getUserBadges: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserCommunityBadgeProgress: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetCommunityBadgeProgress/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserDisplayedBadge: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetFavoriteBadge/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserGames: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserCustomizationDetails: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetProfileCustomization/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserProfileItemsEquipped: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetProfileItemsEquipped/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserRecentlyPlayedGames: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getUserLevel: (apiKey, steamID) => {
        return `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${apiKey}&steamid=${steamID}`;
    },
    getLevelDistribution: (apiKey, playerLevel) => {
        return `https://api.steampowered.com/IPlayerService/GetSteamLevelDistribution/v1/?key=${apiKey}&player_level=${playerLevel}`;
    },
    getAppNews: (apiKey, appID) => {
        return `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?key=${apiKey}&appid=${appID}`;
    },
    getInventory: (appID, steamID) => {
        return `https://steamcommunity.com/inventory/${steamID}/${appID}/2?l=english&count=1000&json=1`;
    }

}