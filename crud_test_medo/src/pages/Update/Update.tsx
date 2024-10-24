import React, { useEffect, useState } from "react";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/casset_case.jpg";
import apiClient from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { Vinyl } from "../../interfaces/VinylsType";

export default function Update() {
  const { id } = useParams<{ id: string }>();
  const vinylId = Number(id);
  const navigate = useNavigate();
  const [editVinyl, setEditVinyl] = useState<Vinyl>({
    vinyl_id: vinylId,
    band: "",
    title: "",
    year: null,
  });

  const handleUpdate = async () => {
    try {
      if (vinylId && editVinyl) {
        await apiClient.updateVinyl(vinylId.toString(), {
          ...editVinyl
        });
        navigate("/case");
      } else {
        console.error("Vinyl ID is missing or editVinyl is null!");
      }
    } catch (err) {
      console.error("An error occurred: ", err);
    }
  };

  useEffect(() => {
    const fetchVinyl = async () => {
      if (vinylId) {
        try {
          const response = await apiClient.getVinylById(vinylId.toString());  
          if (response.data) {
            setEditVinyl(response.data);
          } else {
            console.error("Unexpected response:", response);
          }
        } catch (err) {
          console.error("An error occurred: ", err);
        }
      }
    };
    fetchVinyl();
  }, [vinylId]);


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
        <Forms searchedVinyl={editVinyl} setSearchedVinyl={setEditVinyl} />
        <div className="absolute flex bottom-0 flex-row right-4">
          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
}
