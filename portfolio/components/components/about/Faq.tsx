
const FAQs = () => {

    const faqData = [
        {
            id:1,
            question: "whats is one of your greatest creations",
            answer: "dont really know"
        }
    ]

    return (
        <>
            <div>
                <h2>
                    FAQs
                </h2>
                <div>
                    {
                        faqData.map(value => (
                            <div key={value.id} >
                                <p>{value.question}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FAQs;