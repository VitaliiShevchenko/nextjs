'use client' // only needed in app directory

import { useEffect, useState } from 'react'
import supabase from '../lib/supabase'

export default function Home() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('person').select('*')
            if (error) console.error(error)
            else setData(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Supabase Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
