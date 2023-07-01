import { Markup, Telegraf } from "telegraf";
import { Command } from "./commandClass";
import { IBotContext } from "../contextInterface";

export class MobilizationCommand extends Command {
    constructor(bot: Telegraf<IBotContext>){
        super(bot)
    }
    handle(): void {
        this.bot.command('mobilization',async ctx => {
            const chatId = ctx.chat.id
            const chatMembers = await ctx.telegram.getChatAdministrators(chatId)
            
            let mentions: string[] = []
            chatMembers.forEach((member) => {
                if(!member.user.is_bot){
                    const mention = member.user.username
                    ? `<a href="tg://user?id=${member.user.id}">${member.user.username}</a>`
                    : `<a href="tg://user?id=${member.user.id}">${member.user.first_name}</a>(гомосек без юзернейма)`
                    mentions.push(mention)
                }
            })
            //this.bot.telegram.sendMessage(ctx.chat.id, mentions.join(' '), {parse_mode: 'HTML'})
            await ctx.replyWithHTML(mentions.join(' '))
        })
        
    }
}