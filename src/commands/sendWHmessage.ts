import { Markup, Telegraf } from "telegraf";
import { Command } from "./commandClass";
import { IBotContext } from "../contextInterface";

export class SendWHmessage extends Command {
    constructor(bot: Telegraf<IBotContext>){
        super(bot)
    }
    handle(): void {
        
    }
}