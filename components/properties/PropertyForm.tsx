import React from "react";
import Input from "../elements/input/Input";
import { VALIDATOR_REQUIRE } from "@/validation/Validation";
import { useForm } from "@/hooks/useForm";
import Button from "../elements/button/Button";
import Supabase from "../supabase/supabase";
import ImageUpload from "../elements/imageUpload/imageUpload";

const PropertyForm = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      propertyType: {
        value: "",
        isValid: false,
      },
      propertyInfo: {
        value: "",
        isValid: false,
      },
      location: {
        value: "",
        isValid: false,
      },
      bed: {
        value: "",
        isValid: false,
      },
      bath: {
        value: "",
        isValid: false,
      },
      measurement: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
    },
    false
  );

const inputData = {
    name: formState.inputs.name?.value,
    propertyType: formState.inputs.propertyType?.value,
    propertyInfo: formState.inputs.propertyInfo?.value,
    location: formState.inputs.location?.value,
    bed: formState.inputs.bed?.value,
    bath: formState.inputs.bath?.value,
    measurement: formState.inputs.measurement?.value,
    price: formState.inputs.price?.value,
    image: formState.inputs.image?.value,
}

  

  const addProperty = async(e: any) => {
    e.preventDefault();
    try {
        let { data, error } = await Supabase.from('properties').insert(inputData);
        if (error) {
          console.error("Error fetching data from Supabase:", error);
        } else {
            console.log('Data inserted successfully:', data);
        }
      } catch (err) {
        console.error("An error occurred:", err);
      }
  }

  

  return (
    <div>
      <form onSubmit={addProperty}>
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          placeholder="Enter the description of the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the description of the property."
          onInput={inputHandler}
        />
        <Input
          id="propertyType"
          element="select"
          label="Property Type"
          options={[
            { value: "", displayValue: "Enter the type of the property" },
            { value: "apartment", displayValue: "Apartment" },
            { value: "building", displayValue: "Building" },
            { value: "office", displayValue: "Office" },
          ]}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the type of the property here."
          onInput={inputHandler}
        />
        <Input
          id="propertyInfo"
          element="select"
          label="Property Info"
          options={[
            { value: "", displayValue: "Enter the info of the property" },
            { value: "rent", displayValue: "Rent" },
            { value: "buy", displayValue: "Buy" },
          ]}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the info of the property here."
          onInput={inputHandler}
        />
        <Input
          id="location"
          element="select"
          label="Location"
          options={[
            { value: "", displayValue: "Enter the location of the property" },
            { value: "berlin", displayValue: "Berlin" },
            { value: "munich", displayValue: "Munich" },
            { value: "hamburg", displayValue: "Hamburg" },
            { value: "cologne", displayValue: "Cologne" },
          ]}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the location of the property here."
          onInput={inputHandler}
        />
        <Input
          id="price"
          element="input"
          type="text"
          label="Price"
          placeholder="Enter the price of the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the price of the property here."
          onInput={inputHandler}
        />
        <Input
          id="bed"
          element="input"
          type="number"
          label="Bed"
          placeholder="Enter the number of bed in the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the number of bed in the property here."
          onInput={inputHandler}
        />
        <Input
          id="bath"
          element="input"
          type="number"
          label="Bath"
          placeholder="Enter the number of bath in the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the number of bath in the property here."
          onInput={inputHandler}
        />

        <Input
          id="measurement"
          element="input"
          type="number"
          label="Measurement"
          placeholder="Enter the room measurement of the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the room measurement of the property here."
          onInput={inputHandler}
        />
        <div>
            <label className="pb-8">Image</label>
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
          </div>
       <Button className="text-white bg-green-500 mt-8">Submit</Button>
      </form>
    </div>
  );
};

export default PropertyForm;
