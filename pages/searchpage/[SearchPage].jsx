import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useGetHook from '../../src/components/CustomHooks/useGetHook'
import MainSearch from '../../src/components/Search/MainSearch'
import { APIS } from '../api/hello'

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { SearchPage } = router.query;

  const { data: paginationData } = useGetHook({
    queryKey: `postData${currentPage}${SearchPage}`,
    url: `${APIS.posts}?page=${currentPage}&search=${SearchPage}`,
  });

  return (
    <>
      <Head>
        <title> TheCryptoInsider-Search</title>
        <meta property='og:title' content={' TheCryptoInsider-Search'} />
        <meta
          property='og:image'
          content={
            'https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg'
          }
        />
        <meta
          property='og:description'
          content={'All the latest content about Cryptocurrency of the world'}
        />
        <meta name='twitter:title' content={' TheCryptoInsider-Search'} />
        <meta
          name='twitter:description'
          content={'All the latest content about Cryptocurrency of the world'}
        />
        <meta property='og:type' content='article' />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property='fb:app_id' content={'1144829116095615'} />
      </Head>
      <div style={{ width: '100%' }}>
        <MainSearch
          keyword={SearchPage}
          data={paginationData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default SearchPage