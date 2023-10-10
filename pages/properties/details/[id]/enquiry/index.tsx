import Enquiry from "@/components/enquiry/Enquiry";
import Supabase from "@/components/supabase/supabase";
import { useRouter } from "next/router";
import React from "react";

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
    <div className="bg-gray-100 mt-6 lg:mt-0">
      <Enquiry property={property} />
    </div>
  );
};

export default Index;