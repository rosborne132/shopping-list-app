import * as React from 'react'
import Link from 'next/link'

const links = [
    { href: 'https://zeit.co/now', label: 'ZEIT' },
    { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => ({
    ...link,
    key: `nav-link-${link.href}-${link.label}`
}))

const Nav: React.FC = (): JSX.Element => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>
        <style jsx>
            {`
                nav {
                    text-align: center;
                }

                ul {
                    display: flex;
                    justify-content: space-between;
                }

                ul li {
                    display: flex;
                    padding: 6px 8px;
                }

                li a {
                    color: #067df7;
                    text-decoration: none;
                    font-size: 13px;
                }
            `}
        </style>
    </nav>
)

export default Nav
