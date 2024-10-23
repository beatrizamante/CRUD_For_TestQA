import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/vinyl_case.jpg";
import List from "../../components/List/List";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../api";

export default function VinylCase() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      if (id) {
        await apiClient.deleteVinyl(id);
        console.log("Deletion successfull");
        setShowModal(false);
      } else {
        console.error("Vinyl ID is missing!");
      }
    } catch (err) {
      console.error("An error occured: ", err);
    }
  };

  return (
    <div className="forms bg-darker min-h-screen">
      <div
        className="absolute w-full min-h-screen flex-1 bg-cover opacity-70 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <Header>Vinyl Case</Header>
      <div>
        <div className="mx-4 mb-4">
          <List />
        </div>
        <div className="absolute bottom-0 flex flex-row right-4 left-4 justify-between">
          <Button onClick={() => setShowModal(true)} variant="inverted">
            Delete
          </Button>

          <Button onClick={() => navigate("/update")}>Edit</Button>
        </div>
      </div>

      {
        <DeleteModal
          isVisible={false}
          onConfirm={() => {}}
          onCancel={() => {}}
        />
      }
      <DeleteModal
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
