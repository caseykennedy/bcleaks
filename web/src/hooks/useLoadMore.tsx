// useLoadMore hook

import React, { useState, useEffect, useCallback } from 'react'

// ___________________________________________________________________

// Hook
const useLoadMore = (posts: any) => {
  // State for the list
  const [list, setList] = useState([...posts.slice(0, 15)])
  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > 15)
  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 15)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) // eslint-disable-line

  // Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) // eslint-disable-line

  return { list, handleLoadMore, hasMore }
}

export default useLoadMore
