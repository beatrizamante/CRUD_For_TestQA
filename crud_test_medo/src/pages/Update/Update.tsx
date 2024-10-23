import React, { useEffect, useState } from "react";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/casset_case.jpg";
import apiClient from "../../api";
import { useParams } from "react-router-dom";
import { Vinyl } from "../../interfaces/VinylsType";

export default function Update() {
  const { id } = useParams<{ id: string }>();
  const [editVinyl, setEditVinyl] = useState<Vinyl>({
    id: 0,
    band: "",
    title: "",
    year: 1500,
  });

  const handleUpdate = async () => {
    try {
      if (id) {
        await apiClient.updateVinyl(id, {
          ...editVinyl,
          year: Number(editVinyl.year),
        });
      } else {
        console.error("Vinyl ID is missing!");
      }
    } catch (err) {
      console.error("An error occured: ", err);
    }
  };

  useEffect(() => {
    const fetchVinyl = async () => {
      try {
        if (id) {
          const response = await apiClient.getVinylById(id);
          setEditVinyl(response.data);
        } else {
          console.error("Error fetching item");
        }
      } catch (err) {
        console.error("An error occured: ", err);
      }
    };
    fetchVinyl();
  }, [id]);

  return (
    <div className="forms bg-darker min-h-screen">
      <div
        className="absolute w-full min-h-screen flex-1 bg-cover opacity-70 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <Header>Edit Vinyl</Header>
      <div>
        <div>
          <Forms searchedVinyl={editVinyl} setSearchedVinyl={setEditVinyl} />
        </div>
        <div className="absolute flex bottom-0 flex-row right-4">
          <Button onClick={() => handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
}
