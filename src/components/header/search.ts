import { useState } from 'react';

export const search = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:3000/products?search=${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Kết quả tìm kiếm:', data);
      })
      .catch((error) => {
        console.error('Lỗi khi tìm kiếm:', error);
      });
  };

  return {
    searchText,
    handleInputChange,
    handleSearch,
  };
};