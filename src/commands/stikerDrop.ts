import { Markup, Telegraf } from "telegraf";
import { Command } from "./commandClass";
import { IBotContext } from "../contextInterface";

export class StikerDrop extends Command {
    constructor(bot: Telegraf<IBotContext>){
        super(bot)
    }
    handle(): void {
        this.bot.on('sticker', ctx => {
            const messageId = ctx.message.message_id
            if(ctx.message.sticker.set_name === 'monke2004'){
                ctx.deleteMessage(messageId)
            }
            ctx.sendMessage('Макаки сасат')
        })
    }
}