import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useGetHook from '../../src/components/CustomHooks/useGetHook'
import MainSearch from '../../src/components/Search/MainSearch'
import { APIS } from '../api/hello'

const SearchPage = () => {
    const router = useRouter()
    const { SearchPage } = router.query;
    const [search, setSearch] = useState(true)
    console.log('searchKeyword',SearchPage)

    const {
        isLoading: searchListLoader,
        data: searchpagedata
      } = useGetHook({
        queryKey: `searchpagedata${SearchPage}`,
        url: `${APIS.posts}?search=${SearchPage}`
      });
console.log('searchpagedata',searchpagedata)
  return (
    <div>
        <MainSearch data={searchpagedata} search={search} searchpage={SearchPage}/>
    </div>
  )
}

export default SearchPage