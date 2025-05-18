import Image from "next/image";

const HomeAbout = () => {

    return (
        <>
            <section>
                <div>
                    <h2>
                        about
                    </h2>
                    <button>
                        show more
                    </button>
                </div>
                <p>
                    i collaborate with buisnesses of all sizes worldwide, utilizing the latest technologies to build innovative, high quality solutions.
                </p>
                <div>
                    <Image
                        src=""
                        alt="code image"
                    />
                    <p>
                        i&apos; dedicated to building beautiful, high-performance solutions that are perfectly tailored to meet my clients &apos; unique needs and long-term goals.
                    </p>
                </div>
            </section>
        </>
    )
}

export default HomeAbout;