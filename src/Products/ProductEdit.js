import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";

import { createProduct } from "./ProductsService";

const ProductEditStyles = css`
  color: #fff;
  background: #2a2c37;
  border-radius: 6px;
  padding: 15px;
`;

const ProductEdit = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm({
      id: "",
      name: "",
      price: "",
      description: "",
    });
  }, []);

  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  if (form === null) {
    return <div>Loading...</div>;
  }

  const handleCreate = async () => {
    try {
      const created = await createProduct(form);
      console.log(created);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <form className={ProductEditStyles}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        className="ProductEdit-Input"
        value={form.id}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="ProductEdit-Input"
        value={form.name}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        className="ProductEdit-Input"
        value={form.price}
        onChange={({ target }) =>
          updateField({ name: target.name, value: parseInt(target.value, 10) })
        }
      />
      <textarea
        name="description"
        placeholder="Description"
        className="ProductEdit-Input ProductEdit-TextArea"
        value={form.description}
        onChange={({ target }) => updateField(target)}
      />
      <button
        type="submit"
        className="ProductEdit-Button"
        onClick={handleCreate}
      >
        Create
      </button>
    </form>
  );
};

export default ProductEdit;
