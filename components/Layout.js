import Headroom from 'react-headroom';

export default function Layout({ children }) {
    return (
        <>
            <Headroom
                style={{transition: 'all .5s ease-in-out', zIndex: 50}}
            >
                <div className=" bg-black shadow-lg px-5 py-5 w-screen">
                    <h1 className="font-sans text-lg text-white">THE WAY I WALKED THROUGH</h1>
                </div>
            </Headroom>
            {children}
        </>
    )
}

