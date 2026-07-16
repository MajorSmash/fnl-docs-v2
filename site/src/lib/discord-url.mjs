const DISCORD_HOSTS = new Set(['discord.com', 'www.discord.com', 'discordapp.com']);

export function isDiscordUrl(value) {
  if (!value) return false;

  try {
    const url = value instanceof URL ? value : new URL(String(value));
    return DISCORD_HOSTS.has(url.hostname.toLocaleLowerCase());
  } catch {
    return false;
  }
}
