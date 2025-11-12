import Message from "./Messages/page";
import style from "./container.module.scss";

interface Message {
    role: string;
    text: string;
}

export default function Container({message}:{message: Message[]}){
    return(
        <div className={style.container}>
            {message.map((m, i) => (
            <Message key={i} role={m.role} text={m.text} />
            ))}
        </div>
    )
}
