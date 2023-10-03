import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Supabase from "@/components/supabase/supabase";
import Details from "@/components/details/Details";


const Index = () => {
  const router = useRouter();
  const id = router.query?.id;
  const [property, setProperty] = useState<any | null>(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      if (id) {
        const { data, error } = await Supabase.from("properties")
          .select()
          .eq("id", id)
          .single()
        setProperty(data);
        console.log(error, "err");
      }
    };
    fetchPropertyDetails();
  }, [id]);
  
  return (
    <main >
      <Details property={property}/>
    </main>
  );
};

export default Index;