import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Desktop = () => {
  return (
    <div>
      <h1>Danh mục Máy tính bàn</h1>
      <ul>
        <li><Link to="gaming">Máy tính Gaming</Link></li>
        <li><Link to="office">Máy tính Văn phòng</Link></li>
        <li><Link to="mini">Máy tính Mini</Link></li>
      </ul>

      {/* Nơi hiển thị nội dung danh mục con */}
      <Outlet />
    </div>
  );
};

export default Desktop;
