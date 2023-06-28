import { Telegraf } from "telegraf";
import { IBotContext } from "../contextInterface";

export abstract class Command {
    constructor(public bot: Telegraf<IBotContext>){}

    abstract handle(): void
}