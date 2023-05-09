import NoDataCart from '@/components/features/cart/NoDataCart/NoDataCart'
import { Paper } from '@mantine/core'
import React from 'react'
import UserPageLayout from "@/components/Layouts/UserPageLayout";

const index = () => {
  return (
    <Paper>
      
      <NoDataCart/>
    </Paper>
  )
}

index.Layout = UserPageLayout;

export default index