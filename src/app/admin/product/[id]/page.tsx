"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const AdminProjectPage = () => {
  const { id }: any = useParams();
  const router = useRouter();

  const [project, setProject] = useState({
    product_name: "",
    product_description: "",
    price: 0,
    img: "none",
  });

  useEffect(() => {
    if (id) {
      fetchProject(id);
    }
  }, [id]);

  const fetchProject = async (id: string) => {
    try {
      const response: any = await axios.get(
        `http://localhost:8000/admin/project/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      setProject(response.data);
    } catch (error) {
      console.error("Error fetching project data:", error);
      alert("Failed to fetch project data. Please try again later.");
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/admin/project/${id}`, project, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      alert("Project updated successfully");
      router.push("/admin/projects");
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-white">Edit Project</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label
            htmlFor="project_name"
            className="block text-sm font-medium text-white"
          >
            Project Name
          </label>
          <input
            type="text"
            id="project_name"
            value={project.product_name}
            onChange={(e) =>
              setProject({ ...project, product_name: e.target.value })
            }
            className="mt-1 p-2 block w-full border border-gray-700 rounded-md bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="project_description"
            className="block text-sm font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="project_description"
            value={project.product_description}
            onChange={(e) =>
              setProject({ ...project, product_description: e.target.value })
            }
            className="mt-1 p-2 block w-full border border-gray-700 rounded-md bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            value={project.price}
            onChange={(e) =>
              setProject({ ...project, price: parseFloat(e.target.value) })
            }
            className="mt-1 p-2 block w-full border border-gray-700 rounded-md bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="img" className="block text-sm font-medium text-white">
            Image URL
          </label>
          <input
            type="text"
            id="img"
            value={project.img}
            onChange={(e) => setProject({ ...project, img: e.target.value })}
            className="mt-1 p-2 block w-full border border-gray-700 rounded-md bg-gray-800 text-white"
          />
        </div>

        <div className="mb-4">
          <img
            src={project.img !== "none" ? project.img : "/placeholder.png"}
            alt={project.product_name}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>

        <button
          type="submit"
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-200"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default AdminProjectPage;
