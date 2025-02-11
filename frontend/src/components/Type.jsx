import TypeWriter from "typewriter-effect";

const Type = () => {
    return (
        <div className="TypeEffect">
            <TypeWriter
                options={{
                    strings: ['Software Developer', 'Full-Stack Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed:20,
                  }}
            />
        </div>
    );
}

export default Type;