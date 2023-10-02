import React from 'react'
import { NextPageWithLayout } from '../../../models/common'
import { MainLayout } from '@/components/layout'
import { useRouter } from 'next/router'


interface IProps {

}
const TodoDetails: NextPageWithLayout = (props: IProps) => {
    const router = useRouter()
    console.log("Router", router.query.todoid)
    return (
        <div></div>
    )
}

TodoDetails.Layout = MainLayout
export default TodoDetails