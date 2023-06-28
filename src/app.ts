import { Context, Markup, Telegraf } from "telegraf"
import { Update } from "typegram"
import { message } from 'telegraf/filters'
import { ConfigService } from "./config/configService"
import { IConfigService } from "./config/configInterface"
import { IBotContext } from "./contextInterface"
import { Command } from "./commands/commandClass"
import { GoDotaCommand } from "./commands/goDotaCommand"
import LocalSession from "telegraf-session-local"
import { createServer } from "http"

const BOT_TOKEN = process.env.BOT_TOKEN || 'qwerty'

class Bot {
    bot: Telegraf<IBotContext>
    commands: Command[] = []
    constructor(private readonly configService: IConfigService){
        this.bot = new Telegraf<IBotContext>(BOT_TOKEN)
        this.bot.use(new LocalSession({ database: 'sessions.json'}).middleware())
    }

    async init() {
        this.commands = [new GoDotaCommand(this.bot)]
        for(const command of this.commands){
            command.handle()
        }
        createServer(await this.bot.createWebhook({ domain: "https://wh-bot-alexandr-rubin.vercel.app" })).listen(3000);
        this.bot.launch()
    }
}

const bot = new Bot(new ConfigService())
bot.init()