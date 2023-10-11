import Enquiry from "@/components/enquiry/Enquiry";
import Supabase from "@/components/supabase/supabase";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

const Index = () => {
  const router = useRouter();
  const id = router.query?.id;
  const [property, setproperty] = React.useState<any | null>(null);

  React.useEffect(() => {
    const fetchCarDetails = async () => {
      if (id) {
        const { data, error } = await Supabase.from("properties")
          .select()
          .eq("id", id)
          .single();
        setproperty(data);
        console.log(error, "err");
      }
    };
    fetchCarDetails();
  }, [id]);

  return (
    <div className=" mt-6 lg:mt-0">
        <Head>
        <title>Urban Nest || Enquiry</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Enquiry property={property} />
    </div>
  );
};

export default Index;