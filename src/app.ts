import { Context, Markup, Telegraf } from "telegraf"
import { Update } from "typegram"
import { message } from 'telegraf/filters'
import { ConfigService } from "./config/configService"
import { IConfigService } from "./config/configInterface"
import { IBotContext } from "./contextInterface"
import { Command } from "./commands/commandClass"
import { GoDotaCommand } from "./commands/goDota"
import LocalSession from "telegraf-session-local"
import { MobilizationCommand } from "./commands/mobilization"
import { StikerDrop } from "./commands/stikerDrop"
import dotenv from 'dotenv'

dotenv.config()

const BOT_TOKEN = process.env.BOT_TOKEN || 'qwe'

class Bot {
    bot: Telegraf<IBotContext>
    commands: Command[] = []
    constructor(private readonly configService: IConfigService){
        this.bot = new Telegraf<IBotContext>(BOT_TOKEN)
        this.bot.use(new LocalSession({ database: 'sessions.json'}).middleware())
    }
    init() {
        this.commands = [new GoDotaCommand(this.bot), new MobilizationCommand(this.bot), new StikerDrop(this.bot)]
        for(const command of this.commands){
            command.handle()
        }
        this.bot.launch()
    }
}

const bot = new Bot(new ConfigService())

bot.init()
