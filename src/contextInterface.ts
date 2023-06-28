import { Context } from "telegraf"

export interface SessionData {
    GoDota: boolean
}

export interface IBotContext extends Context {
    session: SessionData
}