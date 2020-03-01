import * as React from 'react'
import Link from 'next/link'

import { UserContext } from '../../context'

export const Nav: React.FC = React.memo(
    (): JSX.Element => {
        const { isUserLoggedIn } = React.useContext(UserContext)
        const linkStyle = 'no-underline white'

        return (
            <header className="bg-blue pa1">
                <nav className="container">
                    <ul className="list flex justify-between ph4 sans-serif">
                        <li>
                            <Link href="/">
                                <a className={linkStyle}>Home</a>
                            </Link>
                        </li>
                        {isUserLoggedIn ? (
                            <li>
                                <Link href="/api/auth/logout">
                                    <a className={linkStyle}>Logout</a>
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link href="/api/auth/login">
                                    <a className={linkStyle}>Login</a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        )
    }
)
