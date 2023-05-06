import React from 'react'
import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'
import HomeContent from '../components/Home'

export default function Home() {
    return (
        <div>
            <Menu />
            <Outlet />
            <HomeContent />
        </div>
    )
}
