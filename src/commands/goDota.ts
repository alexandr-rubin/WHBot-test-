import { Markup, Telegraf } from "telegraf";
import { Command } from "./commandClass";
import { IBotContext } from "../contextInterface";

export class GoDotaCommand extends Command {
    constructor(bot: Telegraf<IBotContext>){
        super(bot)
    }
    handle(): void {
        this.bot.command('godota',ctx => {
            console.log(ctx.session)
            const question = "Go Dota?";
            const options = ["👍🏻", "👎🏿"];
            // const pollMarkup = Markup.inlineKeyboard([
            //     Markup.button.callback(options[0], "yes"),
            //     Markup.button.callback(options[1], "no"),
            // ])
            ctx.replyWithPoll(question, options, {
                is_anonymous: false,
                allows_multiple_answers: false,
                // reply_markup: pollMarkup.reply_markup,
            })
        })
        // this.bot.action("yes", (ctx) => {
            
        //     console.log("Пользователь проголосовал за '👍🏻'");
        //     ctx.answerCbQuery("Вы проголосовали за '👍🏻'");
        // });

        // this.bot.action("no", (ctx) => {
        //     // Обработка голоса "👎🏿"
        //     console.log("Пользователь проголосовал за '👎🏿'");
        //     ctx.answerCbQuery("Вы проголосовали за '👎🏿'");
        // });
    }
}