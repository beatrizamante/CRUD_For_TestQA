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
  const navigate = useNavigate();
  const [editVinyl, setEditVinyl] = useState<Vinyl | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUpdate = async () => {
    try {
      if (id && editVinyl) {
        await apiClient.updateVinyl(id, {
          ...editVinyl,
          year: Number(editVinyl.year),
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
    console.log(id)
    const fetchVinyl = async () => {
      if (id) {
        try {
          const response = await apiClient.getVinylById(id);
          setEditVinyl(response.data);
        } catch (err) {
          console.error("An error occurred: ", err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchVinyl();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!editVinyl) {
    return <div>Error: Unable to load vinyl data</div>;
  }

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
