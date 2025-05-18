
const Work = () => {

    const content = [
        {
            id: 1,
            name: "typicon website",
            imagesrc: "",
        },
        {
            id: 2,
            name: "restaurant website",
            imagesrc: "",
        },
        {
            id: 3,
            name: "chat app",
            imagesrc: "",
        },
    ]

    return(
        <>
            <section>
                <div>
                    <h3>work</h3>
                    <button>show works</button>
                </div>
                <div>
                    {
                        content.map( value => (
                            <div key={value.id} >
                                {value.name}
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )
}

export default Work;