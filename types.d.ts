// auto generated by ./scripts/types.js

type OtherString = string & {}
declare type MessageParameters = {
  "PLUS_MORE": {
    num: number,
  },
  "REPLYING_TO_USER": {
    user: string,
  },
  "SENT_A_STICKER": {
    name: string,
  },
  "STARBOARD_MESSAGE_IMAGE_N": {
    number: number,
  },
  "STARBOARD_MESSAGE_VIDEO_N": {
    number: number,
  },
  "STARBOARD_MESSAGE_FILE_N": {
    number: number,
  },
  "STARBOARD_MESSAGE_SPOILER": {
    content: string,
  },
  "OVERRIDE_NOT_FOUND": {
    name: string,
  },
  "SUCCESS_CREATE_OVERRIDE": {
    name: string,
    type: "channel" | "channelType" | "emoji" | "role",
    channels: number,
    emojis: number,
    roles: number,
  },
  "SUCCESS_CREATE_OVERRIDE_CHANNELS_NOTICE": {
    channels: number,
  },
  "SUCCESS_CREATE_EMOJI_OVERRIDE_NOTICE": {
    emojis: string,
  },
  "CONFIRMATION_DELETE_OVERRIDE": {
    name: string,
  },
  "SUCCESSFULLY_DELETED": {
    name: string,
  },
  "CONFIRMATION_RESET_OVERRIDE": {
    name: string,
  },
  "SUCCESS_RESET_SETTINGS": {
    name: string | null,
  },
  "SUCCESS_RESET_SETTING": {
    setting: string,
    name: string | null,
  },
  "INHERITS_SETTINGS_FROM": {
    name: string,
  },
  "OVERRIDE_APPLY_CHANNELS": {
    other: number,
    channels: string,
  },
  "OVERRIDE_APPLY_CHANNEL_TYPES": {
    type: string,
  },
  "OVERRIDE_APPLY_ROLES": {
    other: number,
    channels: string | null,
    roles: string,
  },
  "OVERRIDE_APPLY_EMOJIS": {
    emojis: string,
    channels: string | null,
  },
  "NUMBER_STARS": {
    stars: number,
  },
  "NUMBER_CHARACTERS": {
    chars: number,
  },
  "SUCCESS_CHANGE_SETTINGS": {
    name: string,
  },
  "SUCCESS_CHANGE_SETTINGS_NOTICE": {
    notices: string,
  },
  "MISSING_ATTACH_FILES_PERMISSION_NOTICE": {
    channel: string,
  },
  "REQUIRED_STARS_CLASH_SET": {
    requiredStars: number,
    requiredToRemove: number,
  },
  "UNUSABLE_REACTION_EMOJIS_PROVIDED": {
    emojis: string,
  },
  "SETTING_ONLY_FOR_SERVER_SETTINGS": {
    setting: string,
  },
  "CANNOT_SEND_MESSAGES_IN_CHANNEL": {
    channel: string,
  },
  "CANNOT_SEND_EMBEDS_IN_CHANNEL": {
    channel: string,
  },
  "CANNOT_VIEW_CHANNEL": {
    channel: string,
  },
  "CANNOT_VIEW_VOICE_CHANNEL": {
    channel: string,
  },
  "CANNOT_READ_HISTORY_IN_CHANNEL": {
    channel: string,
  },
  "SUCCESS_EDIT_OVERRIDE": {
    name: string,
    changes: string,
  },
  "OVERRIDE_NOW_NAMED": {
    name: string,
  },
  "OVERRIDE_PRIORITY_NOW": {
    priority: string,
  },
  "OVERRIDE_NOW_INHERITS": {
    name: string,
  },
  "ALREADY_BLACKLISTED": {
    name: string,
  },
  "SUCCESSFULLY_BLACKLISTED": {
    name: string,
  },
  "SUCCESSFULLY_BLACKLISTED_USER_OR_ROLE": {
    type: "roles" | "users",
    filterBlacklistedUsers: boolean,
  },
  "NOT_BLACKLISTED": {
    name: string,
  },
  "SUCCESSFULLY_UNBLACKLISTED": {
    name: string,
  },
  "SUCCESSFULLY_CLEAR_BLACKLIST_ALL": {
    size: number,
  },
  "SUCCESSFULLY_CLEAR_BLACKLIST_USERS": {
    size: number,
  },
  "SUCCESSFULLY_CLEAR_BLACKLIST_ROLES": {
    size: number,
  },
  "SUCCESSFULLY_CLEAR_BLACKLIST_CHANNELS": {
    size: number,
  },
  "ALREADY_WHITELISTED": {
    name: string,
  },
  "SUCCESSFULLY_WHITELISTED": {
    name: string,
  },
  "NOT_WHITELISTED": {
    name: string,
  },
  "SUCCESSFULLY_UNWHITELISTED": {
    name: string,
  },
  "SUCCESSFULLY_CLEAR_WHITELIST_ALL": {
    size: number,
  },
  "SUCCESSFULLY_CLEAR_WHITELIST_USERS": {
    size: number,
  },
  "SUCCESSFULLY_CLEAR_WHITELIST_ROLES": {
    size: number,
  },
  "SUCCESSFULLY_CLEAR_WHITELIST_CHANNELS": {
    size: number,
  },
  "BLACKLIST_DESCRIPTION_ADD_ITEMS": {
    commands: string,
  },
  "NUMBER_OF_BLACKLISTED_ITEMS": {
    num: number,
  },
  "INHERITS_BLACKLISTED_ITEMS_FROM": {
    name: string,
  },
  "WHITELIST_DESCRIPTION_ADD_ITEMS": {
    commands: string,
  },
  "NUMBER_OF_WHITELISTED_ITEMS": {
    num: number,
  },
  "DISPLAY_TIER_FROM": {
    style: string,
    threshold: number,
  },
  "SUCCESSFULLY_CREATED_DISPLAY_TIER": {
    tier: string,
  },
  "DISPLAY_TIERS_DESCRIPTION_CREATE_TIER": {
    command: string,
  },
  "DISPLAY_TIER_NOT_FOUND": {
    number: number,
    command: string,
  },
  "SUCCESSFULLY_DELETED_DISPLAY_TIER": {
    tier: string,
  },
  "SUCCESSFULLY_EDITED_DISPLAY_TIER": {
    old: string,
    tier: string,
  },
  "SUCCESS_CREATE_REWARD_ROLE_0": {
    role: string,
    required: number,
  },
  "SUCCESS_CREATE_REWARD_ROLE_1": {
    role: string,
    required: number,
  },
  "SUCCESS_CREATE_REWARD_ROLE_2": {
    role: string,
    required: number,
  },
  "SUCCESS_CREATE_REWARD_ROLE_3": {
    role: string,
    required: number,
  },
  "SUCCESS_EDIT_REWARD_ROLE": {
    required: number,
  },
  "SUCCESS_DELETE_REWARD_ROLE": {
    role: string,
  },
  "SUCCESS_DELETE_REWARD_ROLE_TYPE": {
    role: string,
  },
  "REWARD_ROLES_DESCRIPTION_CREATE_REWARD_ROLES": {
    command: string,
  },
  "REWARD_ROLE_DESCRIPTION_REQUIREMENT_0": {
    required: number,
  },
  "REWARD_ROLE_DESCRIPTION_REQUIREMENT_1": {
    required: number,
  },
  "REWARD_ROLE_DESCRIPTION_REQUIREMENT_2": {
    required: number,
  },
  "REWARD_ROLE_DESCRIPTION_REQUIREMENT_3": {
    required: number,
  },
  "REWARD_ROLES_PROGRESS_STARS": {
    obtained: number,
    required: number,
  },
  "AUDIT_LOG_REWARD_ROLES": {
    achievements: string,
  },
  "AUDIT_LOG_ACHIEVEMENT_STARS": {
    stars: number,
  },
  "AUDIT_LOG_ACHIEVEMENT_MOST_STARRED_MESSAGE": {
    stars: number,
  },
  "AUDIT_LOG_ACHIEVEMENT_TIMES_ON_STARBOARD": {
    timesOnStarboard: number,
  },
  "AUDIT_LOG_ACHIEVEMENT_TIMES_ON_HALL_OF_FAME": {
    timesOnHallOfFame: number,
  },
  "INVALID_REGEX": {
    error: string,
  },
  "RELATIVE_MIN_AGE_TIME": {
    time: string,
  },
  "RELATIVE_MAX_AGE_TIME": {
    time: string,
  },
  "SUCCESS_CREATE_FILTER": {
    name: string,
    type: string | number,
    appliesTo: number,
    doesNotApplyTo: number,
  },
  "TO_ADD_FILTER": {
    filtersAdd: string,
    overridesCreateChannel: string,
  },
  "TO_ADD_FILTER_OVERRIDE": {
    filtersAdd: string,
  },
  "SUCCESS_EDIT_FILTER": {
    type: number,
    name: string,
    changes: string,
  },
  "FILTER_NOW_NAMED": {
    name: string,
  },
  "FILTER_NOW_APPLIES": {
    appliesTo: number,
  },
  "FILTER_NOW_NOT_APPLIES": {
    doesNotApplyTo: number,
  },
  "FILTERS_DESCRIPTION": {
    settingsEditFiltering: string,
  },
  "FILTER_OR": {
    a: string,
    b: string,
  },
  "FILTERS_DESCRIPTION_ALL_CREATED": {
    filtersAdd: string,
  },
  "FILTERS_DESCRIPTION_NO_FILTERS_CREATED": {
    filtersCreate: string,
  },
  "VIEW_ALL_CREATED_FILTERS": {
    command: string,
  },
  "THIS_FILTER_SAYS": {
    type: string | number,
  },
  "FILTER_EXPLAIN_CONTENT_MIN_LENGTH": {
    chars: number,
  },
  "FILTER_EXPLAIN_CONTENT_MAX_LENGTH": {
    chars: number,
  },
  "FILTER_EXPLAIN_CONTENT_INCLUDE_TEXT": {
    words: string,
  },
  "FILTER_EXPLAIN_CONTENT_NOT_INCLUDE_TEXT": {
    words: string,
  },
  "FILTER_EXPLAIN_CONTENT_MATCH_REGEX": {
    pattern: string,
  },
  "FILTER_EXPLAIN_CONTENT_NOT_MATCH_REGEX": {
    pattern: string,
  },
  "FILTER_EXPLAIN_ATTACHMENTS_MIN_ATTACHMENTS": {
    num: number,
  },
  "FILTER_EXPLAIN_ATTACHMENTS_MAX_ATTACHMENTS": {
    num: number,
  },
  "FILTER_EXPLAIN_ATTACHMENTS_INCLUDE_TEXT": {
    texts: string,
  },
  "FILTER_EXPLAIN_ATTACHMENTS_NOT_INCLUDE_TEXT": {
    texts: string,
  },
  "FILTER_EXPLAIN_ATTACHMENTS_MATCH_REGEX": {
    pattern: string,
  },
  "FILTER_EXPLAIN_ATTACHMENTS_NOT_MATCH_REGEX": {
    pattern: string,
  },
  "FILTER_EXPLAIN_AGE_MIN": {
    age: string,
  },
  "FILTER_EXPLAIN_AGE_MAX": {
    age: string,
  },
  "FILTER_EXPLAIN_DATE_MIN": {
    date: Date | number,
  },
  "FILTER_EXPLAIN_DATE_MAX": {
    date: Date | number,
  },
  "FILTER_EXPLAIN_APPLIES_TO": {
    list: string,
  },
  "FILTER_EXPLAIN_DOES_NOT_APPLY_TO": {
    list: string,
  },
  "AFTER_FILTER": {
    filter: string,
    position: number,
  },
  "FILTER_NOT_FOUND": {
    name: string,
  },
  "FILTER_ALREADY_ADDED": {
    filter: string,
  },
  "SUCCESS_FILTER_ADD": {
    filter: string,
    override: string | null,
    optional: boolean,
    settingsView: string,
  },
  "CONFIRMATION_DELETE_FILTER": {
    name: string,
  },
  "FILTER_IN_SETTINGS_AUTOCOMPLETE": {
    position: number,
    filter: string,
    optional: boolean,
  },
  "NO_FILTER_AT_POSITION": {
    position: number,
    override: string | null,
  },
  "SUCCESS_FILTER_REMOVE": {
    optional: boolean,
    position: number,
    override: string | null,
    filter: string,
  },
  "SUCCESS_FILTER_MOVE": {
    filter: string,
    old: number,
    position: number,
    override: string | null,
    after: string,
  },
  "PASSES_FILTER": {
    filter: string,
    result: string,
  },
  "MESSAGE_CONTENT_LENGTH": {
    num: number,
  },
  "MESSAGE_ATTACHMENTS_LENGTH": {
    num: number,
  },
  "MESSAGE_HAS_MEDIA": {
    has: string,
  },
  "MESSAGE_AGE": {
    age: string,
  },
  "MESSAGE_DATE": {
    date: Date | number,
  },
  "PONG": {
    latency: string,
    shard: string,
    shardLatency: string,
    dbLatency: string,
  },
  "CLUSTER_N": {
    number: number,
  },
  "SHARD_N": {
    number: number,
  },
  "UPTIME": {
    uptime: string,
    lastRestart: string,
  },
  "STAT_SERVERS": {
    servers: number,
  },
  "STAT_USERS": {
    users: number,
  },
  "STAT_COMMANDS_RAN": {
    commandsRan: number,
  },
  "STAT_CACHED_USERS": {
    cachedUsers: number,
  },
  "STAT_CACHED_MEMBERS": {
    cachedMembers: number,
  },
  "STAT_CACHED_MESSAGES": {
    cachedMessages: number,
  },
  "STAT_CPU_USAGE": {
    cpuUsage: number,
  },
  "STAT_MEMORY_USAGE": {
    memoryUsage: string,
  },
  "SUCCESSFULLY_FORCED_MESSAGE": {
    link: string,
    unlock: string,
  },
  "FAILED_FORCE_MESSAGE": {
    starboard: string,
  },
  "SUCCESSFULLY_RECOUNTED": {
    stars: number,
    link: string | null,
  },
  "CONFIRMATION_TRASH_MESSAGE": {
    link: string,
    reason: string | null,
  },
  "SUCCESSFULLY_TRASHED_MESSAGE": {
    users: string | null,
  },
  "SUCCESSFULLY_CLEAR_TRASH": {
    items: number,
  },
  "SUCCESSFULLY_ADD_HALL_OF_FAME": {
    message: string,
  },
  "SUCCESSFULLY_REMOVE_HALL_OF_FAME": {
    message: string,
  },
  "SUCCESSFULLY_CLEAR_HALL_OF_FAME": {
    number: number,
  },
  "THIS_MESSAGE_IS_TRASHED": {
    reason: string | null,
  },
  "STARS_FIELD": {
    stars: number,
    requiredStars: number | null,
    upvotes: number,
    downvotes: number,
  },
  "STARRED_MESSAGE_UNOBTAINABLE": {
    channel: string,
  },
  "USERS_STATS": {
    user: string,
  },
  "STAT_WITH_PAST_24_HRS": {
    count: number,
    today: number,
  },
  "LEADERBOARD_TITLE": {
    title: string,
  },
  "YOUR_PLACE": {
    place: number,
  },
  "USERS_PLACE": {
    user: string,
    place: number,
  },
  "NOTHING_TO_SHOW_PREMIUM": {
    patreonLink: string,
    premiumLimit: number,
  },
  "CONFIRMATION_LEADERBOARD_RESET_USER": {
    username: string,
    mention: string,
    keepOldRewardRoles: boolean,
    statsUser: string,
  },
  "SUCCESSFULLY_RESET_LEADERBOARD_USER_KEEP_REWARD_ROLES": {
    username: string,
    mention: string,
  },
  "SUCCESSFULLY_RESET_LEADERBOARD_USER": {
    username: string,
    mention: string,
  },
  "CONFIRMATION_LEADERBOARD_RESET": {
    stats: string,
    hasPremium: boolean,
    modLeaderboardRestore: string,
    patreonLink: string,
  },
  "SUCCESSFULLY_RESET_LEADERBOARD": {
    count: number,
  },
  "LEADERBOARD_AUTO_RESET_EVERY": {
    type: "date" | "days",
    nextReset: string,
    days: number,
    date: number,
  },
  "SUCCESSFULLY_RESTORE_LEADERBOARD": {
    entries: number,
  },
  "CONFIRMATION_LEADERBOARD_RESTORE": {
    after: string | null,
  },
  "DEBUG_FAILED_FILTERS": {
    filters: string,
    filtersTestCommand: string,
  },
  "DEBUG_NOTHING_WRONG": {
    link: string,
    modInfoCommand: string,
  },
  "SUCCESSFULLY_REDEEMED_PREMIUM_CODE": {
    code: string,
    duration: string,
  },
  "PREMIUM_WILL_BE_ACTIVATED": {
    type: "code" | "pledge",
  },
  "TO_REDEEM_STARBOARD_PREMIUM": {
    premiumRedeem: string,
  },
  "TO_GET_STARBOARD_PREMIUM": {
    patreonLink: string,
  },
  "SERVER_HAS_PREMIUM": {
    type: "code" | "pledge",
    user: string,
    inTimeLeft: string,
  },
  "PREMIUM_FEATURE_EMOJIS": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_DOWNVOTE_EMOJIS": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_OVERRIDES": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_REWARD_ROLES": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_FILTERS": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_DISPLAY_TIERS": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_LEADERBOARD_ENTRIES": {
    premiumLimit: number,
    freeLimit: number,
  },
  "PREMIUM_FEATURE_FILE_UPLOADS": {
    freeMB: number,
  },
  "REACHED_LIMIT_PREMIUM_UPSELL": {
    type: "displayTiers" | "filters" | "overrides" | "rewardRoles",
    premium: boolean,
    premiumLimit: number | null,
    patreonLink: string,
  },
  "LOCKED_FEATURE_PREMIUM_UPSELL": {
    feature: "lbRestore" | null,
    patreonLink: string,
  },
  "SET_LIMIT_PREMIUM_UPSELL": {
    type: "downvoteEmojis" | "emojis",
    premium: boolean,
    premiumLimit: number | null,
    patreonLink: string,
  },
}

export = MessageParameters