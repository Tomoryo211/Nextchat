
export default function Nextchat({role, text}) {
    const isUser = role === 'user';
    return (
        <>
            <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl break-words whitespace-pre-wrap
                    ${isUser ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-100 text-gray-900 rounded-bl-none"}`}
                >
                <div className="text-area">{text}</div>
                <div className="text-[10px] text-gray-400 mt-1 text-right">{role}</div>
            </div>
            </div>
        </>
    );
}