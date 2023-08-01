import { Outlet } from 'react-router-dom'

const AdminLayoits = () => {
  return (
    <div style={{display: 'flex'}}>
      <aside>Menu</aside>
      <main><Outlet /></main>
    </div>

  )
}

export default AdminLayoits