import React from "react";
import { Routes, Route } from 'react-router-dom'
import Category from "../../components/CategoryList";
import DashBoard from "../AdminDashboard";
import CategoryAdd from "../../components/CategoryAdd";
import CategoryListEdit from "../../components/CategoryListEdit";
import CategoryListDelete from "../../components/CategoryListDelete";


const InvRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category-add" element={<CategoryAdd />} />
        <Route path="/category-edit" element={<CategoryListEdit />} />
        <Route path="/category-delete" element={<CategoryListDelete />} />
      </Routes>
    </>
  );
};

export default InvRoutes;