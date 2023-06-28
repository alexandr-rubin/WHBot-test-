import { Context } from "telegraf"

export interface SessionData {
    vote: boolean
    GoDota: boolean
}

export interface IBotContext extends Context {
    session: SessionData
}