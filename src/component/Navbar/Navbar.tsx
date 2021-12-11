import /*React, */ { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
    let listener: any = null;
    const [scrollState, setScrollState] = useState<string>("up")

    useEffect(() => {
        listener = document.addEventListener('scroll',
            e => {
                let scrolled: any = document.scrollingElement?.scrollTop
                if (scrolled >= '650') {
                    if (scrollState !== "down") {
                        setScrollState("down")
                    }
                } else {
                    setScrollState("up")
                }
            })
        return () => document.removeEventListener('scroll', listener)
    }, [scrollState])


    return (
        <div>
            <nav className='navbar navbar-light navbarStyle' style={
                {
                    backgroundColor: scrollState === 'up' ? 'rgba(0, 0, 0, 0.25)' : 'black'
                }
            }>
                <a href="" className='navbar-brand text-light'>NAVBAR</a>
            </nav>
        </div>
    )
}
