import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time


Client = discord.Client()
client = commands.Bot(command_prefix = "*")

chat_filter = ["FUCKER", "CUNT", "SHIT", "SHITTY", "SHITY", "BITCH", "FUCK", "ASSHOLE", "FUCKING", "FUCKER", "ASSHAT", "ASS"]
bypass_list = ["shyt"]

@client.event
async def on_ready():
    print("Bot is set up")

@client.event
async def on_message(message):
    if message.content == "*meaning":
        await client.send_message(message.channel, "``The meaning of this bot is mostly to moderate, its also possible to do other commands like this one! Do *help for more information``")
    if message.content == "*cookie":
        await client.send_message(message.channel, ":cookie:")
    if message.content == "*credits":
        await client.send_message(message.channel, "``Coded and founded by JPGMC, directed and added by Wyldcat15.``")
    if message.content == "*ip":
        await client.send_message(message.channel, ":arrow_forward: ``blackplasma.xyz or 149.56.207.12``")
    if message.content == "*help":
        await client.send_message(message.channel, "```Bot Commands: *help Shows this message, *meaning Tells the meaning of this bot, *cookie You know what its going to do :P *ip Tells you the ip of the black plasma server *credits For the credits```  ``DON'T FORGET THAT ALL COMMANDS ARE LOWER CASE.``")
    if message.content == "*easteregg":
        await client.send_message(message.channel, ":egg: JPGMC was here.")
    contents = message.content.split(" ") #contents is a list type
    for word in contents:
        if word.upper() in chat_filter:
            if not message.author.id in bypass_list:
                try:
                    await client.delete_message(message)
                    await client.send_message(message.channel, "```You're not allowed to use that(those) word(s).```")
                except discord.errors.NotFound:
                    return




client.run("NDM0NDU2OTgxNzE0MjM5NTE4.DbKtaw.1JlkiT_8nJVna370bGukjQG_dHM")

