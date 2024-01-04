import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = ()=> {
    return (
        <Avatar className="h-8 w-8 bg-red-500">
            <AvatarImage className="p-1" src="/logo.svg" />
        </Avatar>
    )
}