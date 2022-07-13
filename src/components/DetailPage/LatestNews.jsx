import Link from 'next/link'
import React from 'react'
import LatestNewsCard from './LatestNewsCard'

const LatestNews = (props) => {
  return (
    <div>
      <hr />
      <Link href={`/articles/${props.slug}`}>
        <a href="">
          <LatestNewsCard image={props?.image} title={props?.title} created={props?.created} id={props?.id} contentlength={props.contentlength} />
        </a>
      </Link>

    </div>
  )
}

export default LatestNews