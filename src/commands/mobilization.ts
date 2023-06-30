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
            const chatMembers = await ctx.telegram.getChatAdministrators(chatId);
            
            let mentions = ''
            chatMembers.forEach((member) => {
                if(!member.user.is_bot){
                    const mention = member.user.username ? `@${member.user.username}` === '@Blablaraz' ? `@${member.user.username}(просто gomosek)`: `@${member.user.username}`: `@${member.user.first_name}(гомосек без юзернейма)`
                    mentions += mention + ' '
                }
            })

            ctx.reply(`Проводится мобилизация для игры в доту, список призывников: ${mentions}`)
        })
        
    }
}