import { Markup, Telegraf } from "telegraf";
import { Command } from "./commandClass";
import { IBotContext } from "../contextInterface";
import { message } from "telegraf/filters";

export class CatchMessage extends Command {
    constructor(bot: Telegraf<IBotContext>){
        super(bot)
    }
    handle(): void {
        this.bot.hears('@rubangru', ctx => {
            const message = ctx.message
            // ctx.sendMessage(message.text)
        })
    }
}