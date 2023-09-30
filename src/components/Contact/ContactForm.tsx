"use client";

import React from "react";

import { useForm, FieldValues } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-unused-vars
  const onSumbit = (_data: FieldValues) => {};

  return (
    <form
      onSubmit={handleSubmit(onSumbit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        {...register("name", { required: true, maxLength: 50 })}
      />
      and I want to discuss a potential project. You can email me at{" "}
      <input
        type="email"
        placeholder="your@email"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        {...register("email")}
      />
      or reach out to me on{" "}
      <input
        type="tel"
        placeholder="your phone"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        {...register("phone number")}
      />
      Here are some details about my project:
      <br />
      <textarea
        {...register("project details")}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        placeholder="My project is about..."
        rows={3}
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
