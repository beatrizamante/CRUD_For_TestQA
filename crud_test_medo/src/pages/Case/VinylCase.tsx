import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/vinyl_case.jpg";
import List from "../../components/List/List";
import DeleteModal from "../../components/DeleteModal";

export default function VinylCase() {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handleCloseModal = () => {
    setDeleteModalVisible(false);
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
          <Button onClick={handleDeleteClick} variant="inverted">
            Delete
          </Button>

          <Button onClick={() => {}}>Edit</Button>
        </div>
      </div>

      {<DeleteModal isVisible={false} onClose={() => {}}/>}
      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={handleCloseModal}
      />
    </div>
  );
}
