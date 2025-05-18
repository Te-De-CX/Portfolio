
const Technologies = () => {

    const techStack = [
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
        {
            id:1,
            name: "css",
        },
    ]

    return (
        <div>
            <h3>
                technologies
            </h3>
            {
                techStack.map((value, index) => (
                    <div key={index} >
                        {value.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Technologies;