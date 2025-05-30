const translate = async (text: string, to: string): Promise<string> => {
    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: "auto",
            target: to
        }),
        headers: { "Content-Type": "application/json" }
    })

    return (await res.json()).translatedText;
}

export default translate;