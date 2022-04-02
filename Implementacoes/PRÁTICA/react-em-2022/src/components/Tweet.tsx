type TweetProps = {
    text: string
    // title: string,
    // description: string
}

export default function Tweet(props: TweetProps){
    return (
        <div>
            <h1>Texto da publicação: {props.text}</h1>
        </div>
    )
}