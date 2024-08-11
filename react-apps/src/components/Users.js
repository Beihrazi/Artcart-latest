import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      user 1
      user 2
      user 3
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h3>Showing active users</h3>
      ) : (
        <h3>Showing all users</h3>
      )
      }
    </div>


  )
}
