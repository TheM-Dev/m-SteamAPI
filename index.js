const urls = require('./urls');

module.exports = function(apiKey){

    this.get = (url) => fetch(url).then(res => res.json()).catch(err => err);
    this.throwErr = (modules) => new Error(`Error when attempted to retrieve data from API. Function: ${module}`);

    /**
     * @name                  getPlayerCount
     * @description           Get back player count from specified Steam app ID.
     * @author                m.
     * @param   {String}      appID                 Specify an app ID to get data from.
     * 
     * @returns {String}
     */
    this.getPlayerCount = async appID => 
        get(urls.getPlayerCount(apiKey, appID))
            .catch(error => this.throwErr('getPlayerCount'));

    /**
     * @name                  getPlayerSummaries
     * @description           Get back player data from specified SteamID64.
     * @author                m.
     * @param   {String}      steamID                Specify an SteamID64 to get data from.
     * 
     * @returns {Object}
     */
    this.getPlayerSummaries = async steamID => 
        get(urls.getPlayerSummaries(apiKey, steamID))
            .catch(error => this.throwErr('getPlayerSummaries'));

    /**
     * @name                  getUserGroups
     * @description           Get back user groups list from specified SteamID64.
     * @author                m.
     * @param   {String}      steamID                Specify an SteamID64 to get data from.
     * 
     * @returns {Array}
     */
    this.getUserGroups = async steamID => 
        get(urls.getUserGroups(apiKey, steamID))
            .catch(error => this.throwErr('getUserGroups'));

    /**
     * @name                  resolveVanityUrl
     * @description           Get back user SteamID64 from VanityURL.
     * @author                m.
     * @param   {String}      vanityURL              Specify an VanityURL to get SteamID64 from.
     * 
     * @returns {String}
     */
    this.resolveVanityUrl = async vanityURL => 
        get(urls.resolveVanityUrl(apiKey, vanityURL))
            .catch(error => this.throwErr('resolveVanityUrl'));

    /**
     * @name                  getUserBans
     * @description           Get user ban stats from SteamID64.
     * @author                m.
     * @param   {String}      steamID                Specify an steamID to get ban stats from.
     * 
     * @returns {Object}
     */
    this.getUserBans = async steamID => 
        get(urls.getUserBans(apiKey, steamID))
            .catch(error => this.throwErr('getUserBans'));

    /**
     * @name                  getGameAchievements
     * @description           Get list of achievements from specified appID.
     * @author                m.
     * @param   {String}      appID              Specify an appID to get achievements Array back.
     * 
     * @returns {Array}
     */
    this.getGameAchievements = async appID => 
        get(urls.getGameAchievements(apiKey, appID))
            .catch(error => this.throwErr('getGameAchievements'));

    /**
     * @name                  getUserStatsForGame
     * @description           Get user achievements from specified appID.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get statistics from.
     * @param   {String}      appID              Specify an appID to get user statistics from.
     * 
     * @returns {Array}
     */
    this.getUserStatsForGame = async (steamID, appID) => 
        get(urls.getUserStatsForGame(apiKey, steamID, appID))
            .catch(error => this.throwErr('getUserStatsForGame'));

    /**
     * @name                  getSteamGames
     * @description           Returns Steam games from store.
     * @author                m.
     * 
     * @returns {Array}
     */
    this.getSteamGames = async () =>
        get(urls.getSteamGames(apiKey))
            .catch(error => this.throwErr('getSteamGames'));

    /**
     * @name                  getSteamSoftware
     * @description           Returns Steam software from store.
     * @author                m.
     * 
     * @returns {Array}
     */
    this.getSteamSoftware = async () =>
        get(urls.getSteamSoftware(apiKey))
            .catch(error => this.throwErr('getSteamSoftware'));

    /**
     * @name                  getUserBadges
     * @description           Returns user owned Steam badges.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get badges from.
     * 
     * @returns {Array}
     */
    this.getUserBadges = async steamID =>
        get(urls.getUserBadges(apiKey, steamID))
            .catch(error => this.throwErr('getUserBadges'));

    /**
     * @name                  getUserCommunityBadgeProgress
     * @description           Returns user Community Badge progress.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get badge progress from.
     * 
     * @returns {Array}
     */
    this.getUserCommunityBadgeProgress = async steamID =>
        get(urls.getUserCommunityBadgeProgress(apiKey, steamID))
            .catch(error => this.throwErr('getUserCommunityBadgeProgress'));

    /**
     * @name                  getUserDisplayedBadge
     * @description           Returns user's displayed badge details.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get badge details from.
     * 
     * @returns {Object}
     */
    this.getUserDisplayedBadge = async steamID =>
        get(urls.getUserDisplayedBadge(apiKey, steamID))
            .catch(error => this.throwErr('getUserDisplayedBadge'));

    /**
     * @name                  getUserGames
     * @description           Returns list of user's owned games.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get game details from.
     * 
     * @returns {Object}
     */
    this.getUserGames = async steamID =>
        get(urls.getUserGames(apiKey, steamID))
            .catch(error => this.throwErr('getUserGames'));

    /**
     * @name                  getUserCustomizationDetails
     * @description           Returns user's profile customization details.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get user customization details from.
     * 
     * @returns {Object}
     */
    this.getUserCustomizationDetails = async steamID =>
        get(urls.getUserCustomizationDetails(apiKey, steamID))
            .catch(error => this.throwErr('getUserCustomizationDetails'));

    /**
     * @name                  getUserProfileItemsEquipped
     * @description           Returns user's profile items equipped.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get equipped items details from.
     * 
     * @returns {Object}
     */
    this.getUserProfileItemsEquipped = async steamID =>
        get(urls.getUserProfileItemsEquipped(apiKey, steamID))
            .catch(error => this.throwErr('getUserProfileItemsEquipped'));

    /**
     * @name                  getUserRecentlyPlayedGames
     * @description           Returns user's recently played games count and list.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get recently played games from.
     * 
     * @returns {Object}
     */
    this.getUserRecentlyPlayedGames = async steamID =>
        get(urls.getUserRecentlyPlayedGames(apiKey, steamID))
            .catch(error => this.throwErr('getUserRecentlyPlayedGames'));

    /**
     * @name                  getUserLevel
     * @description           Returns user's Steam level.
     * @author                m.
     * @param   {String}      steamID            Specify an steamID to get level details from.
     * 
     * @returns {String}
     */
    this.getUserLevel = async steamID =>
        get(urls.getUserLevel(apiKey, steamID))
            .catch(error => this.throwErr('getUserLevel'));

    /**
     * @name                  getLevelDistribution
     * @description           Returns data about Steam level distribution.
     * @author                m.
     * @param   {String}      playerLevel        Specify an Steam level to get distribution details from.
     * 
     * @returns {String}
     */
    this.getLevelDistribution = async playerLevel =>
        get(urls.getLevelDistribution(apiKey, playerLevel))
            .catch(error => this.throwErr('getLevelDistribution'));

    /**
     * @name                  getAppNews
     * @description           Returns news of providen appID.
     * @author                m.
     * @param   {String}      appID               Specify an appID get news from.
     * 
     * @returns {String}
     */
    this.getAppNews = async appID =>
        get(urls.getAppNews(apiKey, appID))
            .catch(error => this.throwErr('getAppNews'));

    /**
     * @name                  getInventory
     * @description           Returns Array with inventory items.
     * @author                m.
     * @param   {String}      appID               Specify an appID to get inventory from.
     * @param   {String}      steamID             Specify an steamID to get inventory from.
     * 
     * @returns {Array}
     */
    this.getInventory = async (appID, steamID) => {
        const items = [];
        await this.get(urls.getInventory(appID, steamID))
            .then(function (response) {
                response.data.descriptions.forEach(item => {
                    const { market_name, appid, actions, icon_url_large, tradable, marketable, tags, name_color, type } = item;
                    const tagList = [];
                    tags.forEach(tag => tagList[tag.category] = tag.localized_tag_name);
                    items.push({
                        appId: appid,
                        itemName: market_name,
                        itemTradeable: tradable ? true : false,
                        itemMarketable: marketable ? true : false,
                        inspectLink: actions[0].link || null,
                        itemNameColor: name_color,
                        itemType: type,
                        imageUrl: `https://community.akamai.steamstatic.com/economy/image/${icon_url_large}`,
                        tags: tagList
                    })
                })
            })
            .catch(err => this.throwErr(`InventoryAPI`));
        return items;
    }
}