import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/vinyl_case.jpg";
import List from "../../components/List/List";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api";
import { Vinyl } from "../../interfaces/VinylsType";
import BackButtom from "../../components/BackButtom";

export default function VinylCase() {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [selectId, setSelectId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const listRef = useRef<HTMLUListElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const handleDelete = async () => {
    try {
      if (selectId != null) {
        await apiClient.deleteVinyl(selectId.toString());
        console.log("Deletion successful");
        setShowModal(false);
        setSelectId(null); 
        handleList();
      } else {
        console.error("Vinyl ID is missing!");
      }
    } catch (err) {
      console.error("An error occurred: ", err);
    }
  };

  const handleList = async () => {
    try {
      const response = await apiClient.getVinyl();
      const dbVinyls = response.data;
      setVinyls(dbVinyls);
      console.log("Success! List formed!");
    } catch (err) {
      console.error("An error occurred: ", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        listRef.current &&
        !listRef.current.contains(target) && 
        buttonContainerRef.current &&
        !buttonContainerRef.current.contains(target) 
      ) {
        if(!showModal) {
          setSelectId(null); 
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

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
      <div className="flex flex-row items-center justify-between">
      <BackButtom
      onClick={() => navigate(-1) }> {"<"} </BackButtom>
      <Header>Vinyl Case</Header>
      </div>
      <div>
        <div className="mx-4 mb-4">
          <ul ref={listRef}>
            <List
              listOfVinyls={vinyls.map((vinyl) => ({
                ...vinyl,
                id: vinyl.vinyl_id,
              }))}
              onSelectedVinyl={(id: number) => {
                setSelectId(id);
              }}
              selectedVinylId={selectId}
            />
          </ul>
        </div>
        <div
          ref={buttonContainerRef}
          className="absolute bottom-0 flex flex-row right-4 left-4 justify-between"
        >
          <Button
            onClick={() => {
              if (selectId) {
                setShowModal(true);
              }
            }}
            variant="inverted"
          >
            Delete
          </Button>

          <Button
            onClick={() => {
              if (selectId) {
                navigate(`/update/${selectId}`);
              }
            }}
            disabled={!selectId}
          >
            Edit
          </Button>
        </div>
      </div>

      <DeleteModal
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
