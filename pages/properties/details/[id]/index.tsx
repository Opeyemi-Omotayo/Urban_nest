import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Supabase from "@/components/supabase/supabase";
import Details from "@/components/details/Details";
import Head from "next/head";


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
      }
    };
    fetchPropertyDetails();
  }, [id]);
  
  return (
    <main >
      <Head>
        <title>Urban Nest || Property Details</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Details property={property}/>
    </main>
  );
};

export default Index;