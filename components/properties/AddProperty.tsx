import React from "react";
import Input from "../elements/input/Input";
import { VALIDATOR_REQUIRE } from "@/validation/Validation";
import { useForm } from "@/hooks/useForm";

const AddProperty = () => {
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

  return (
    <div>
      <form>
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
            { value: "", displayValue: "Enter the type of property" },
            { value: "apartment", displayValue: "Apartment" },
            { value: "building", displayValue: "Building" },
            { value: "office", displayValue: "Office" },
          ]}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the type of property here."
          onInput={inputHandler}
        />
        <Input
          id="propertyInfo"
          element="select"
          label="Property Info"
          options={[
            { value: "", displayValue: "Enter the info of property" },
            { value: "rent", displayValue: "Rent" },
            { value: "buy", displayValue: "Buy" },
          ]}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the info of property here."
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
          type="text"
          label="Bed"
          placeholder="Enter the number of bed in the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the number of bed in the property here."
          onInput={inputHandler}
        />
        <Input
          id="bath"
          element="input"
          type="text"
          label="Bath"
          placeholder="Enter the number of bath in the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the number of bath in the property here."
          onInput={inputHandler}
        />

        <Input
          id="measurement"
          element="input"
          type="text"
          label="Measurement"
          placeholder="Enter the room measurement of the property"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the room measurement of the property here."
          onInput={inputHandler}
        />
      </form>
    </div>
  );
};

export default AddProperty;
