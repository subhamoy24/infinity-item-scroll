"use client"; // This is a client component
import Image from "next/image"
import ListItem from "@/components/ListItem"
import axios from "axios"
import { useEffect, useState } from "react"
export default function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [lock, setLock] = useState(false);

  const fetchData = async () => {
    const data = await axios.get(`https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${page}`);
    
    setItems((prev) => [...prev, ...data.data.data.recruits]);
  }
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if(page > 4) {
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [items])

  return (
    
    <main>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-4 max-w-6xl pt-8'>
        {items.map((item) => <ListItem key={item.id} item={item}/>)}
      </div>
    </main>
  )
}
