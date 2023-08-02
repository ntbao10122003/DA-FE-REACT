import { Outlet } from 'react-router-dom'
import MenuAdmin from '../admin/MenuAdmin'

const AdminLayouts = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <aside><MenuAdmin /></aside>
        <main><Outlet /></main>
      </div>
    </div>
  );
};


export default AdminLayouts