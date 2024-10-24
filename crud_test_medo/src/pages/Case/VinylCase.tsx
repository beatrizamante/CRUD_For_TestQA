import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/vinyl_case.jpg";
import List from "../../components/List/List";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../api";
import { Vinyl } from "../../interfaces/VinylsType";

export default function VinylCase() {
  const { id } = useParams<{ id: string }>();
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [selectId, setSelectId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      if (id) {
        await apiClient.deleteVinyl(id);
        console.log("Deletion successfull");
        setShowModal(false);
        handleList();
      } else {
        console.error("Vinyl ID is missing!");
      }
    } catch (err) {
      console.error("An error occured: ", err);
    }
  };

  const handleList = async () => {
    try {
      const response = await apiClient.getVinyl();
      const dbVinyls = response.data;
      setVinyls(dbVinyls);
      console.log("Success! Lists formed!");
    } catch (err) {
      console.error("An error occurred: ", err);
    }
  };

  useEffect(() => {
    handleList();
  }, []);

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
          <List
            listOfVinyls={vinyls}
            onSelectedVinyl={(id) => setSelectId(id)}
          />
        </div>
        <div className="absolute bottom-0 flex flex-row right-4 left-4 justify-between">
          <Button onClick={() => setShowModal(true)} variant="inverted">
            Delete
          </Button>

          <Button
            onClick={() => {
              if (selectId) {
                navigate(`/update/${selectId}`);
              } else {
                alert("Please select a vinyl item to edit.");
              }
            }}
          >
            {" "}
            Edit
          </Button>
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
