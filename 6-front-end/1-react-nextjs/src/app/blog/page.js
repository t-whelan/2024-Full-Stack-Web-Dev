import React from 'react'
import Link from 'next/link'

const Blog = () => {
    return (
<div>
<Link href={'/blog/${1}'}>Blog 1</Link>
<Link href={'/blog/${2}'}>Blog 2</Link>
<Link href={'/blog/${3}'}>Blog 3</Link>

</div>
    )
}
export default Blog