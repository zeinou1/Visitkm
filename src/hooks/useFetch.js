// pour la récupération de données  et l affichage des données 

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url);
        //TODO: vérifier si on a les données
        //! gestion des erreurs
        if (!res.ok) {
          setError("Error fetching");
          alert("fetch error to get Data");
        }
        //TODO = stockage de données

        const result = await res.json();
        setData(result.data);
        // si on a le donnée on met le loader en false
        setLoading(false);
      } catch (error) {
        setError("Standby database, sorry😢😢", error.message);
        setLoading(false);
        // alert("Impossible de récuperer les  données", error);
      }
    };

    fetchData();
  }, [url]); //! dépendance

  return {
    //? Informations qu on va utliser coté front
    data,
    error,
    loading,
  };
};
export default useFetch;
